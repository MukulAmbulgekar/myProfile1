'use strict';

angular.module('myprofileApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/preview', {
        templateUrl: 'app/preview/preview.html',
        controller: 'ProfileCtrl',
        resolve: {
          userInfo: ['$http', '$window', function($http, $window) {
            return $http.get('/api/users/userInfo/' + $window.localStorage.loggedInUser)
          }]
        }
      })
      .when('/aboutme', {
        templateUrl: 'app/preview/partials/about.html',
        controller: 'ProfileCtrl'
      })
  .when('/contactme', {
        templateUrl: 'app/preview/partials/contact.html',
        controller: 'ProfileCtrl'
      })
    .when('/aboutme', {
        templateUrl: 'app/preview/partials/about.html',
        controller: 'ProfileCtrl'
      })
      ;
  });
