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
      .when('/histo', {
        templateUrl: 'views/histo.html',
        controller: 'HistoCtrl',
        controllerAs: 'histo'
      })
      .when('/score', {
        templateUrl: 'views/score.html',
        controller: 'ScoreCtrl',
        controllerAs: 'score'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
