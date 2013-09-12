<?php
namespace Destiny\Action\Web\Fantasy;

use Destiny\Common\HttpEntity;
use Destiny\Common\Application;
use Destiny\Common\Utils\Http;
use Destiny\Common\MimeType;
use Destiny\Common\Annotation\Action;
use Destiny\Common\Annotation\Route;

/**
 * @Action
 */
class Servers {

	/**
	 * @Route ("/fantasy/servers")
	 *
	 * @param array $params
	 */
	public function execute(array $params) {
		$app = Application::instance ();
		$stats = $app->getCacheDriver ()->fetch ( 'leaguestatus' );
		$response = new HttpEntity ( Http::STATUS_OK, json_encode ( $stats ) );
		$response->addHeader ( Http::HEADER_CACHE_CONTROL, 'private' );
		$response->addHeader ( Http::HEADER_PRAGMA, 'public' );
		$response->addHeader ( Http::HEADER_CONTENTTYPE, MimeType::JSON );
		return $response;
	}

}