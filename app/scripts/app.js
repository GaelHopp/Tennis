'use strict';

/**
 * @ngdoc overview
 * @name tennisApp
 * @description
 * # tennisApp
 *
 * Main module of the application.
 */
angular.module('tennisApp', [
    //'ngAnimate',
    //'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute'
    //'ngSanitize',
    //'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
