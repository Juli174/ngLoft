;(function(){
	'use strict';

	angular
		.module('Loft.User', [])
		.config(UserConfig)
		.controller('UserCtrl', UserController);

	function UserController(){
		this.hello = "User";
	}

	function UserConfig($routeProvider){
		$routeProvider
		.when('/user', {
			templateUrl: 'app/user/user.html',
			controller: 'UserCtrl',
			controllerAs: 'uc'
		});
	}
})();