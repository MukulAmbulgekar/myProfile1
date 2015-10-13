'use strict';

angular.module('myprofileApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/preview', {
        templateUrl: 'app/preview/template/preview.html',
        controller: 'PreviewCtrl',
        resolve: {
          userInfo: ['$http', '$window', function($http, $window) {
            return $http.get('/api/users/userInfo/' + $window.localStorage.loggedInUser)
          }]
        }
      })
  });