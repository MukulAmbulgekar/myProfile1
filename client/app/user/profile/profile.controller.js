'use strict';

angular.module('myprofileApp')
	.controller('ProfileCtrl', function($scope, userInfo, $http) {
		$scope.message = 'Hello';
		$scope.userInfo = {};
		//$scope.userInfo=userInfo.data.userInfo;
		var updatedUserInfo = {};
		$scope.educationFields = [{
			title: 'School Name',
			type: 'text',
			id:'schoolName'
		}, {
			title: 'Degree',
			type: 'text',
			id:'degree'
		}, {
			title: 'From',
			type: 'date',
			id:'from'
		}, {
			title: 'To',
			type: 'date',
			id:'to'
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
		}]
		$scope.userInfo['personalInformation'] = userInfo.data.userInfo['personalInformation'] || userInfo.data.userInfo;
		$scope.userInfo['education'] = userInfo.data.userInfo['education'] || {};
		$scope.userInfo['experience'] = userInfo.data.userInfo['experience'] || {};
		$scope.userInfo['certification'] = userInfo.data.userInfo['certification'] || {};
			userInfo.data.userInfo.education.graduate.from=processDate(userInfo.data.userInfo.education.graduate.from);
		userInfo.data.userInfo.education.graduate.to=processDate(userInfo.data.userInfo.education.graduate.to);
		userInfo.data.userInfo.education.undergraduate.to=processDate(userInfo.data.userInfo.education.undergraduate.to);
		userInfo.data.userInfo.education.undergraduate.from=processDate(userInfo.data.userInfo.education.undergraduate.from);
		userInfo.data.userInfo.experience.first.from=processDate(userInfo.data.userInfo.experience.first.from);
		userInfo.data.userInfo.experience.first.to=processDate(userInfo.data.userInfo.experience.first.to);
		userInfo.data.userInfo.experience.second.to=processDate(userInfo.data.userInfo.experience.second.to);
		userInfo.data.userInfo.experience.second.from=processDate(userInfo.data.userInfo.experience.second.from);
			userInfo.data.userInfo.certification.first.from=processDate(userInfo.data.userInfo.certification.first.from);
		userInfo.data.userInfo.certification.first.to=processDate(userInfo.data.userInfo.certification.first.to);
		userInfo.data.userInfo.certification.second.to=processDate(userInfo.data.userInfo.certification.second.to);
		userInfo.data.userInfo.certification.second.from=processDate(userInfo.data.userInfo.certification.second.from);

		//console.log('Hello', new Date(userInfo.data.userInfo.experience.first.from))
		$scope.updateProfile = function() {
			updatedUserInfo = $scope.userInfo;
			//updatedUserInfo.type=updatePage;
			//console.log('updatePage',updatePage)
			$http.post('/api/users/updateProfile', {
				data: updatedUserInfo
			}).success(function(response) {
				console.log('updatedUserInfo', response);
				console.log(response.message);
			}).error(function(error) {
				console.log(response.error);
			})

		}

		function processDate(stringFormatDate){

			return new Date(stringFormatDate);
		}
	});