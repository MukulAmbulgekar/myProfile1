'use strict';

angular.module('myprofileApp')
	.controller('PreviewCtrl', function($scope, userInfo, $location,$modal) {
		$scope.items = ['item1', 'item2', 'item3'];
var items;
  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'project1.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };


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
			'title': 'Experience',
			'link': '/preview#experience'
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
		$scope.userInfo.experience.first.responsibilities = $scope.userInfo.experience.first.responsibilities.split("|");
		$scope.userInfo.experience.second.responsibilities = $scope.userInfo.experience.second.responsibilities.split("|");
		$scope.userInfo.experience.third.responsibilities = $scope.userInfo.experience.third.responsibilities.split("|");
		console.log("kk", $scope.userInfo.education.graduate.from.getYear(), 'pp', $scope.userInfo.education.graduate.to.getMonth())
		$scope.userInfo.education.graduate.from = monthYearFromDate($scope.userInfo.education.graduate.from);
		$scope.userInfo.education.graduate.to = monthYearFromDate($scope.userInfo.education.graduate.to);
		$scope.userInfo.education.undergraduate.from = monthYearFromDate($scope.userInfo.education.undergraduate.from);
		$scope.userInfo.education.undergraduate.to = monthYearFromDate($scope.userInfo.education.undergraduate.to);
		$scope.userInfo.experience.first.from = monthYearFromDate($scope.userInfo.experience.first.from);
		$scope.userInfo.experience.first.to = monthYearFromDate($scope.userInfo.experience.first.to);
		$scope.userInfo.experience.second.from = monthYearFromDate($scope.userInfo.experience.second.from);
		$scope.userInfo.experience.second.to = monthYearFromDate($scope.userInfo.experience.second.to);
		$scope.userInfo.experience.third.from = monthYearFromDate($scope.userInfo.experience.third.from);
		$scope.userInfo.experience.third.to = monthYearFromDate($scope.userInfo.experience.third.to);
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

angular.module('myprofileApp').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});