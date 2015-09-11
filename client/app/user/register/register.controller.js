'use strict';

angular.module('myprofileApp')
	.controller('RegisterCtrl', function($scope, $http,$location,$window	) {

		$scope.message = 'Hello';
		var user = {};
		$scope.signUpForm = [{
				label: 'First Name',
				id: 'firstName',
				type: 'text',
				value: ''
			}, {
				label: 'Last Name',
				id: 'lastName',
				type: 'text',
				value: ''
			}, {
				label: 'Username',
				id: 'username',
				type: 'text',
				value: ''
			}, {
				label: 'Email',
				id: 'emailId',
				type: 'email',
				value: ''
			}, {
				label: 'Password',
				id: 'password',
				type: 'password',
				value: ''
			}, {
				label: 'Re-enter Password',
				id: 'passwordRe',
				type: 'password',
				value: ''
			}]
			//	loginService.createUser(user);
		$scope.submit = function() {

			_.forEach($scope.signUpForm, function(field) {
					user[field.label.toLowerCase()] = field.value
				})
				//loginService.creeateUser(user);
			console.log('User', user);
			$http.post('/api/users/createUser', {
				data: user
			}).success(function(response) {
				console.log('Awesome success', response)
				$window.localStorage.current=response.user;
				$location.path('/home');
			}).error(function(error) {
				console.log('failure', error)
			});
		}
		$scope.clear = function() {
			_.forEach($scope.signUpForm, function(field) {
				field.value = '';
			})
		}
	});