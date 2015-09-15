'use strict';
angular.module('myprofileApp').
service('user', ["$http", 
	function($http) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	this.userInfo = function(username) {
		console.log('-->>>', username)
		console.log('URI', '/api/users/userInfo/mukul1330');
			return $http({
				method: 'GET',
				uri: '/api/users/userInfo/1234'
			})
	/*	return $http({
			method: 'GET',
			uri: '/'
		})*/
	}

}]);