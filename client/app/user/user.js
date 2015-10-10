'use strict';

angular.module('myprofileApp')
  .config(function($routeProvider) {
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
      })
      .when('/logout', {
        templateUrl: 'app/user/login/login.html'
      })
      .when('/buildprofile', {
        templateUrl: 'app/user/profile/profile.html',
        controller: 'ProfileCtrl',
        resolve: {
          userInfo: ['$http', '$window', function($http, $window) {
            return $http.get('/api/users/userInfo/' + $window.localStorage.loggedInUser)
          }]
        }
      });
  });