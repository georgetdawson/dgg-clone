<?php
namespace Destiny\Action\Web\Payment;

use Destiny\Common\Service\SubscriptionsService;
use Destiny\Common\ViewModel;
use Destiny\Common\Session;
use Destiny\Common\Service\OrdersService;
use Destiny\Common\Utils\Date;
use Destiny\Common\Utils\Http;
use Destiny\Common\Config;
use Destiny\Common\Exception;
use Destiny\Common\Annotation\Action;
use Destiny\Common\Annotation\Route;
use Destiny\Common\Annotation\Secure;
use Destiny\Common\Annotation\Transactional;
use PayPal\CoreComponentTypes\BasicAmountType;
use PayPal\PayPalAPI\SetExpressCheckoutReq;
use PayPal\PayPalAPI\SetExpressCheckoutRequestType;
use PayPal\EBLBaseComponents\BillingAgreementDetailsType;
use PayPal\EBLBaseComponents\SetExpressCheckoutRequestDetailsType;
use PayPal\EBLBaseComponents\BillingPeriodDetailsType;
use PayPal\EBLBaseComponents\CreateRecurringPaymentsProfileRequestDetailsType;
use PayPal\EBLBaseComponents\RecurringPaymentsProfileDetailsType;
use PayPal\EBLBaseComponents\ScheduleDetailsType;
use PayPal\PayPalAPI\CreateRecurringPaymentsProfileReq;
use PayPal\PayPalAPI\CreateRecurringPaymentsProfileRequestType;
use PayPal\PayPalAPI\GetExpressCheckoutDetailsReq;
use PayPal\PayPalAPI\GetExpressCheckoutDetailsRequestType;
use PayPal\Service\PayPalAPIInterfaceServiceService;
use PayPal\EBLBaseComponents\PaymentDetailsType;

/**
 * @Action
 */
class Activate {

	/**
	 * @Route ("/payment/activate")
	 * @Secure ({"USER"})
	 * @Transactional
	 *
	 * @param array $params
	 * @param ViewModel $model
	 * @throws Exception
	 * @return string
	 */
	public function execute(array $params, ViewModel $model) {
		$subService = SubscriptionsService::instance ();
		$orderService = OrdersService::instance ();
		
		$subscription = $subService->getUserActiveSubscription ( Session::getCredentials ()->getUserId () );
		// This can only be done on active subscriptions, else the user must resub
		if (empty ( $subscription )) {
			$model->error = new Exception ( 'No subscription to re-activate' );
			return 'paymenterror';
		}
		
		$paymentProfile = null;
		if (! empty ( $subscription ['paymentProfileId'] )) {
			$paymentProfile = $orderService->getPaymentProfileById ( $subscription ['paymentProfileId'] );
			if (! empty ( $paymentProfile )) {
				
				$paymentProfile ['billingCycle'] = $orderService->buildBillingCycleString ( $paymentProfile ['billingFrequency'], $paymentProfile ['billingPeriod'] );
				$paymentProfile ['billingStartDate'] = $subscription ['endDate'];
				$paymentProfile ['billingNextDate'] = $subscription ['endDate'];
				
				// Get the billing agreement from the order - weird
				$items = $orderService->getOrderItems ( $paymentProfile ['orderId'] );
				$subType = $subService->getSubscriptionType ( $items [0] ['itemSku'] );
				if (empty ( $subType )) {
					$model->error = new Exception ( 'Invalid subscription type' );
					return 'paymenterror';
				}
				$subscription ['agreement'] = $subType ['agreement'];
			}
		}
		
		// We always need an inactive-active profile
		if (empty ( $paymentProfile ) || strcasecmp ( $paymentProfile ['state'], 'ActiveProfile' ) === 0) {
			throw new Exception ( sprintf ( 'Payment profile already active' ) );
		}
		
		// If we got a success response, its from PP
		if (isset ( $params ['success'] ) && ! empty ( $params ['success'] )) {
			if (! isset ( $params ['token'] ) || empty ( $params ['token'] )) {
				$model->error = new Exception ( 'Invalid token' );
				return 'paymenterror';
			}
			if (empty ( $params ['confirmationId'] ) || $params ['confirmationId'] != Session::get ( 'confirmationId' )) {
				$model->error = new Exception ( 'Invalid confirmation id' );
				return 'paymenterror';
			}
			
			if ($params ['success'] == 'false' || $params ['success'] === false) {
				$model->error = new Exception ( 'Error activating payment' );
				return 'paymenterror';
			}
			
			if ($params ['success'] == 'true' || $params ['success'] === true) {
				// Reset confirmation
				Session::set ( 'confirmationId' );
				
				$createRPProfileResponse = $this->createRecurringPaymentProfile ( $paymentProfile, $params ['token'], $subscription );
				if (! isset ( $createRPProfileResponse ) || $createRPProfileResponse->Ack != 'Success') {
					$model->error = new Exception ( 'Failed to create recurring payment request' );
					return 'paymenterror';
				}
				$paymentProfileId = $createRPProfileResponse->CreateRecurringPaymentsProfileResponseDetails->ProfileID;
				$paymentStatus = $createRPProfileResponse->CreateRecurringPaymentsProfileResponseDetails->ProfileStatus;
				if (empty ( $paymentProfileId )) {
					$model->error = new Exception ( 'Invalid recurring payment profileId returned from Paypal' );
					return 'paymenterror';
				}
				// Recreates the profile, since this is a "reactivation"
				$paymentProfile ['state'] = $paymentStatus;
				$paymentProfile ['paymentProfileId'] = $paymentProfileId;
				$paymentProfile ['profileId'] = $orderService->addPaymentProfile ( $paymentProfile );
				$subService->updateSubscriptionPaymentProfile ( $subscription ['subscriptionId'], $paymentProfile ['profileId'], true );
				
				$model->title = 'Scheduled payment updated';
				$model->subscription = $subscription;
				$model->paymentProfile = $paymentProfile;
				$model->paymentActivated = true;
				return 'paymentactivate';
			}
		}
		
		// Get confirmation and handle success
		if (! isset ( $params ['confirmationId'] ) || empty ( $params ['confirmationId'] )) {
			$confirmationId = md5 ( microtime ( true ) . Session::getCredentials ()->getUserId () );
			Session::set ( 'confirmationId', $confirmationId );
			$model->title = 'Activate scheduled payment';
			$model->confirmationId = $confirmationId;
			$model->subscription = $subscription;
			$model->paymentProfile = $paymentProfile;
			$model->paymentActivated = false;
			return 'paymentactivate';
		}
		
		// Confirmation received
		if (isset ( $params ['confirmationId'] ) && $params ['confirmationId'] == Session::get ( 'confirmationId' )) {
			$newPaymentProfile = $paymentProfile;
			$newPaymentProfile ['profileId'] = $orderService->addPaymentProfile ( $newPaymentProfile );
			$setECResponse = $this->getExpressCheckoutResponse ( $subscription, $newPaymentProfile, $params ['confirmationId'] );
			if (isset ( $setECResponse ) && $setECResponse->Ack == 'Success') {
				// &useraction=commit
				return 'redirect: ' . Config::$a ['paypal'] ['api'] ['endpoint'] . urlencode ( $setECResponse->Token );
			}
		}
		$model->error = new Exception ( 'Invalid confirmation id' );
		return 'paymenterror';
	}

	/**
	 * Retrieve the checkout instance from paypal
	 *
	 * @return \PayPalAPI\GetExpressCheckoutDetailsResponseType
	 */
	protected function retrieveCheckoutInfo($token) {
		$paypalService = new PayPalAPIInterfaceServiceService ();
		$getExpressCheckoutReq = new GetExpressCheckoutDetailsReq ();
		$getExpressCheckoutReq->GetExpressCheckoutDetailsRequest = new GetExpressCheckoutDetailsRequestType ( $token );
		return $paypalService->GetExpressCheckoutDetails ( $getExpressCheckoutReq );
	}

	/**
	 * Execute the setExpressCheckout process, forwards to paypal
	 *
	 * @param array $subscription
	 * @param array $paymentProfile
	 */
	protected function getExpressCheckoutResponse(array $subscription, array $paymentProfile, $confirmId) {
		$returnUrl = Http::getBaseUrl () . '/payment/activate?success=true&confirmationId=' . urlencode ( $confirmId );
		$cancelUrl = Http::getBaseUrl () . '/payment/activate?success=false&confirmationId=' . urlencode ( $confirmId );
		
		$setECReqDetails = new SetExpressCheckoutRequestDetailsType ();
		$setECReqDetails->ReqConfirmShipping = 0;
		$setECReqDetails->NoShipping = 1;
		$setECReqDetails->AllowNote = 0;
		$setECReqDetails->ReturnURL = $returnUrl;
		$setECReqDetails->CancelURL = $cancelUrl;
		$setECReqDetails->SolutionType = 'Sole';
		
		// Create billing agreement for recurring payment
		$billingAgreementDetails = new BillingAgreementDetailsType ( 'RecurringPayments' );
		$billingAgreementDetails->BillingAgreementDescription = $subscription ['agreement'];
		$setECReqDetails->BillingAgreementDetails [0] = $billingAgreementDetails;
		
		$paymentDetails = new PaymentDetailsType ();
		$paymentDetails->PaymentAction = 'Sale';
		$paymentDetails->NotifyURL = Config::$a ['paypal'] ['api'] ['ipn'];
		$paymentDetails->OrderTotal = new BasicAmountType ( $paymentProfile ['currency'], $paymentProfile ['amount'] );
		$paymentDetails->ItemTotal = new BasicAmountType ( $paymentProfile ['currency'], $paymentProfile ['amount'] );
		$paymentDetails->Recurring = 0;
		$setECReqDetails->PaymentDetails [0] = $paymentDetails;
		
		// Paypal UI settings
		$setECReqDetails->BrandName = Config::$a ['commerce'] ['reciever'] ['brandName'];
		
		// Execute checkout
		$setECReqType = new SetExpressCheckoutRequestType ();
		$setECReqType->SetExpressCheckoutRequestDetails = $setECReqDetails;
		$setECReq = new SetExpressCheckoutReq ();
		$setECReq->SetExpressCheckoutRequest = $setECReqType;
		
		$paypalService = new PayPalAPIInterfaceServiceService ();
		return $paypalService->SetExpressCheckout ( $setECReq );
	}

	/**
	 * Create a Paypal recurring payment profile
	 *
	 * @param array $order
	 * @param string $token
	 * @param array $subscription
	 * @return \PayPalAPI\CreateRecurringPaymentsProfileResponseType
	 */
	protected function createRecurringPaymentProfile(array $paymentProfile, $token, array $subscription) {
		$billingStartDate = Date::getDateTime ( $paymentProfile ['billingStartDate'] );
		
		$RPProfileDetails = new RecurringPaymentsProfileDetailsType ();
		$RPProfileDetails->SubscriberName = Session::getCredentials ()->getUsername (); // This should be passed in
		$RPProfileDetails->BillingStartDate = $billingStartDate->format ( \DateTime::ATOM );
		$RPProfileDetails->ProfileReference = $paymentProfile ['userId'] . '-' . $paymentProfile ['orderId'];
		
		$paymentBillingPeriod = new BillingPeriodDetailsType ();
		$paymentBillingPeriod->BillingFrequency = $paymentProfile ['billingFrequency'];
		$paymentBillingPeriod->BillingPeriod = $paymentProfile ['billingPeriod'];
		$paymentBillingPeriod->Amount = new BasicAmountType ( $paymentProfile ['currency'], $paymentProfile ['amount'] );
		
		$scheduleDetails = new ScheduleDetailsType ();
		$scheduleDetails->Description = $subscription ['agreement'];
		$scheduleDetails->PaymentPeriod = $paymentBillingPeriod;
		
		$createRPProfileRequestDetail = new CreateRecurringPaymentsProfileRequestDetailsType ();
		$createRPProfileRequestDetail->Token = $token;
		$createRPProfileRequestDetail->ScheduleDetails = $scheduleDetails;
		$createRPProfileRequestDetail->RecurringPaymentsProfileDetails = $RPProfileDetails;
		
		$createRPProfileRequest = new CreateRecurringPaymentsProfileRequestType ();
		$createRPProfileRequest->CreateRecurringPaymentsProfileRequestDetails = $createRPProfileRequestDetail;
		$createRPProfileReq = new CreateRecurringPaymentsProfileReq ();
		$createRPProfileReq->CreateRecurringPaymentsProfileRequest = $createRPProfileRequest;
		
		$paypalService = new PayPalAPIInterfaceServiceService ();
		return $paypalService->CreateRecurringPaymentsProfile ( $createRPProfileReq );
	}

}