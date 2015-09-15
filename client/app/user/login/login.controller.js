'use strict';

angular.module('myprofileApp')
	.controller('LoginCtrl', function($scope, $http,$location, $window) {
		$scope.message = 'Hello';
		var currentUser={};
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

		$scope.login = function() {
			var credentials = {};

			_.forEach($scope.loginForm, function(value, key) {
				credentials[value.id.toLowerCase()] = value.value;
			})

			console.log('credentials', credentials);
			$http.post('/api/users/login', {
				data: credentials
			}).success(function(response) {
				console.log('Login is successful',response.user);
				$location.path('/home');
				$window.localStorage.loggedInUser=credentials.username;
				currentUser=response.user;
			}).error(function(response) {
				console.log('Login failed',response.error);
			})
		}
		$scope.logout= function(){
			$window.localStorage.loggedInUser='';
			$location.path('/home');

		}
	});