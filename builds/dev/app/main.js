;(function(){
	'use strict';

	angular
		.module('Loft', [
			'ngRoute',
			'Loft.User',
			'Loft.Users'
		])
		.config(Config)
		.controller('MainCtrl', ['$scope', MainController]);

	function MainController($scope){
		var mc = this;
		$scope.hello = "Привет, мир!";
		mc.hello = "Это controllerAs";
	};

	function Config($routeProvider){
		$routeProvider
		.when('/user', {
			templateUrl: 'app/user/user.html',
			controller: 'UserCtrl',
			controllerAs: 'uc'
		})
		.otherwise({redirectTo: '/'});
	}


})();