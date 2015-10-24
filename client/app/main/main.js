'use strict';

angular.module('myprofileApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });