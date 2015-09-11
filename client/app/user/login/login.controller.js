'use strict';

angular.module('myprofileApp')
	.controller('LoginCtrl', function($scope) {
		$scope.message = 'Hello';

		$scope.loginForm = [{
			label: 'Username',
			id: 'username',
			type: 'text',
			value: ''
		}, {
			label: 'Password',
			id: 'password',
			type: 'password',
			value: ''
		}]
	});