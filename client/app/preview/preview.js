'use strict';

angular.module('myprofileApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/preview', {
        templateUrl: 'app/preview/preview.html',
        controller: 'PreviewCtrl',
        /*resolve: {
          userInfo: ['$http', '$window', function($http, $window) {
            return $http.get('/api/users/userInfo/mukul12')
          }]
        }*/
      })
  });