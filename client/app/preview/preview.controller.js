'use strict';

angular.module('myprofileApp')
	.controller('PreviewCtrl', function($scope, userInfo,$location) {
		$scope.message = 'Hello';
		$scope.menuItem = [{
			'title': 'Home',
			'link': '/preview#home',
			'class': 'glyphicon glyphicon-home'
		}, {
			'title': 'About Me',
			'link': '/preview#summary'
		}, {
			'title': 'Skills',
			'link': '/preview#skills'
		}, {
			'title': 'Projects',
			'link': '/preview#projects'
		}, {
			'title': 'Education',
			'link': '/preview#education'
		}, {
			'title': 'Connect',
			'link': '/preview#connect'
		}];
		var monthNames = ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"
		];
		$scope.userInfo = userInfo.data.userInfo;
		$scope.userInfo = processDate($scope.userInfo);
		$scope.userInfo.summary.description = userInfo.data.userInfo.summary.description.split("|");
		$scope.userInfo.summary.aboutme = userInfo.data.userInfo.summary.aboutme.split("|");
		console.log("kk", $scope.userInfo.education.graduate.from.getYear(), 'pp', $scope.userInfo.education.graduate.to.getMonth())
		$scope.userInfo.education.graduate.from = monthYearFromDate($scope.userInfo.education.graduate.from);
		$scope.userInfo.education.graduate.to = monthYearFromDate($scope.userInfo.education.graduate.to);
		$scope.userInfo.education.undergraduate.from = monthYearFromDate($scope.userInfo.education.undergraduate.from);
		$scope.userInfo.education.undergraduate.to = monthYearFromDate($scope.userInfo.education.undergraduate.to);
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
		$scope.isActive = function(route) {
			return route === $location.path();
		};

		function monthYearFromDate(date) {
			return monthNames[date.getMonth()] + ' ' + date.getFullYear();
		}
	});