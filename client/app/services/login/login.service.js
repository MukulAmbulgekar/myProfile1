'use strict';
angular.module('myprofileApp').
service('login', ["$http", function($http) {
		// AngularJS will instantiate a singleton by calling "new" on this function
		this.createUser = function(user) {
			console.log('-->>>')
			return $http({
				method: 'POST',
				uri: '/api/user/createUser',
				data: user
			})
		}

	}]);