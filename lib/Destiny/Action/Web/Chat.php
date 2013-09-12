<?php
namespace Destiny\Action\Web;

use Destiny\Common\ViewModel;
use Destiny\Common\Application;
use Destiny\Common\Annotation\Action;
use Destiny\Common\Annotation\Route;

/**
 * @Action
 */
class Chat {

	/**
	 * @Route ("/chat")
	 *
	 * @param array $params
	 * @param ViewModel $model
	 * @return string
	 */
	public function execute(array $params, ViewModel $model) {
		$app = Application::instance ();
		return 'chat';
	}

}
