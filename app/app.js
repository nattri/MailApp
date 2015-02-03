'use strict';

angular.module('mailApp',[
	'ngRoute',
	'mailApp.login'
	])
	.config(['$routeProvider',function($routeProvider){
		$routeProvider.
			when('/',{templateUrl:'login/login.html',controller:'loginCtrl'}).
			otherwise({redirectTo:'/'});
	}]);