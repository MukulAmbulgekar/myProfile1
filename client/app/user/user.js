'use strict';

angular.module('myprofileApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user', {
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl'
      })
      .when('/register', {
        templateUrl: 'app/user/register/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/login', {
        templateUrl: 'app/user/login/login.html',
        controller: 'LoginCtrl'
      });

  });
