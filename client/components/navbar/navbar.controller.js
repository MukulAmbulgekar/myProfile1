'use strict';

angular.module('myprofileApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },{
      'title': 'About Us',
      'link': '/about'
    },{
      'title': 'Contact Us',
      'link': '/contact'
    },{
      'title': 'Sign Up',
      'link': '/register'
    },{
      'title': 'Login',
      'link': '/login'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });