'use strict';

angular.module('myprofileApp')
	.controller('ProfileCtrl', function($scope, userInfo, $http) {
		$scope.message = 'Hello';
		$scope.userInfo = {};
		$scope.exp = 0;
		//$scope.userInfo=userInfo.data.userInfo;
		var updatedUserInfo = {};
		$scope.educationFields = [{
			title: 'School Name',
			type: 'text',
			id: 'schoolName'
		}, {
			title: 'Degree',
			type: 'text',
			id: 'degree'
		}, {
			title: 'From',
			type: 'date',
			id: 'from'
		}, {
			title: 'To',
			type: 'date',
			id: 'to'
		}];
		$scope.tabs = [{
			'title': 'Personal Information',
			'link': '#'
		}, {
			'title': 'Education',
			'link': '#'
		}, {
			'title': 'Experience',
			'link': '#'
		}, {
			'title': 'Certification',
			'link': '#'
		}, {
			'title': 'Programming Skills',
			'link': '#'
		}, {
			'title': 'Import Projects',
			'link': '#'
		}, {
			'title': 'Summary',
			'link': '#'
		}, , {
			'title': 'Preview',
			'link': '#'
		}]

		$scope.userInfo['personalInformation'] = userInfo.data.userInfo['personalInformation'] || userInfo.data.userInfo;
		$scope.userInfo['education'] = userInfo.data.userInfo['education'] || {};
		$scope.userInfo['experience'] = userInfo.data.userInfo['experience'] || {};
		$scope.userInfo['certification'] = userInfo.data.userInfo['certification'] || {};
		$scope.userInfo = processDate($scope.userInfo);
		//console.log('Hello', new Date(userInfo.data.userInfo.experience.first.from))
		$scope.updateProfile = function(updatePage) {
			updatedUserInfo = $scope.userInfo;
			updatedUserInfo.type = updatePage;
			console.log('updatePage', updatePage)
			$http.post('/api/users/updateProfile', {
				data: updatedUserInfo
			}).success(function(response) {
				alert('success');
				console.log('updatedUserInfo', response);
				console.log(response.message);
			}).error(function(error) {
				alert('failure');
				console.log(response.error);
			})

		}


		// private functions
		function processDate(userInfo) {
			_.forEach(userInfo, function(value, key) {
				_.forEach(value, function(v, k) {
					_.forEach(v, function(v1, k1) {
						if (k1 === 'from' || k1 === 'to')
							userInfo[key][k][k1] = new Date(v1);
					});
				});
			});
			return userInfo;
		}
	});