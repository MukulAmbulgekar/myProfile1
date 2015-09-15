'use strict';

angular.module('myprofileApp')
  .controller('NavbarCtrl', function($scope, $location, $window) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/',
      'class':'glyphicon glyphicon-home'
    }, {
      'title': 'About Us',
      'link': '/about'
    }, {
      'title': 'Contact Us',
      'link': '/contact'
    }/*, {
      'title': 'Sign Up',
      'link': '/register'
    }, {
      'title': 'Login',
      'link': '/login'
    }*/];
     $scope.signin=[{
      'title': 'Sign Up',
      'link': '/register'
    }, {
      'title': 'Login',
      'link': '/login'
    }]
    $scope.dropdownMenu = [{
      title: 'My Profile',
      link: '/viewProfile'
    }, {
      title: 'Build Profile',
      link: '/buildprofile'
    }, {
      title: 'Preview Website',
      link: '/preview'
    }]

    $scope.currentUser = {};
    $scope.isCollapsed = true;
    $scope.currentUser = $window.localStorage.loggedInUser
    console.log("Current User", $scope.currentUser)

    $scope.isActive = function(route) {
      return route === $location.path();
    };
    $scope.logout= function(){
      $window.localStorage.loggedInUser='';
      $scope.currentUser='';
      $location.path('/login');
    }
  });