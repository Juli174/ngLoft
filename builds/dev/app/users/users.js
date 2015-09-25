;(function(){
	'use strict';

	angular
		.module('Loft.Users', [])
		.config(UsersConfig)
		.controller('UsersCtrl', UsersController);

	function UsersController(){
		this.hello = "Users";
	}

	function UsersConfig($routeProvider){
		$routeProvider
		.when('/users', {
			templateUrl: 'app/users/users.html',
			controller: 'UsersCtrl',
			controllerAs: 'usc'
		});
	}
})();