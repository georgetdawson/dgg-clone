<?php
namespace Destiny\Action\Web\Chat;

use Destiny\Common\ViewModel;
use Destiny\Common\Annotation\Action;
use Destiny\Common\Annotation\Route;

/**
 * @Action
 */
class Faq {

	/**
	 * @Route ("/chat/faq")
	 *
	 * @param array $params
	 * @param ViewModel $model
	 * @return string
	 */
	public function execute(array $params, ViewModel $model) {
		$model->title = 'Frequently Asked Questions';
		return 'chat/faq';
	}

}