'use strict';

angular.module('mailApp.login',[])
	.controller('loginCtrl',['$scope',function($scope){
		$scope.titleMsg = "Enter email id";
		$scope.email='';
	}]);