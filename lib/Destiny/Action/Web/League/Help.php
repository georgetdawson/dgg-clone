<?php
namespace Destiny\Action\Web\League;

use Destiny\Common\Application;
use Destiny\Common\Service\Fantasy\TeamService;
use Destiny\Common\Session;
use Destiny\Common\ViewModel;
use Destiny\Common\Annotation\Action;
use Destiny\Common\Annotation\Route;

/**
 * @Action
 */
class Help {

	/**
	 * @Route ("/league/help")
	 *
	 * @param array $params
	 * @param ViewModel $model
	 * @return string
	 */
	public function execute(array $params, ViewModel $model) {
		$teamId = Session::get ( 'teamId' );
		$teamService = TeamService::instance ();
		$cacheDriver = Application::instance ()->getCacheDriver ();
		$model->title = 'Help';
		$model->user = Session::getCredentials ()->getData ();
		$model->leagueServers = $cacheDriver->fetch ( 'leaguestatus' );
		if (! empty ( $teamId )) {
			$model->team = $teamService->getTeamByUserId ( Session::getCredentials ()->getUserId () );
			$model->teamChamps = $teamService->getTeamChamps ( $teamId );
		}
		return 'league/help';
	}

}