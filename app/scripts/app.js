'use strict';

/**
 * @ngdoc overview
 * @name yomanApp
 * @description
 * # yomanApp
 *
 * Main module of the application.
 */



angular
  .module('yomanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',

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
      .when('/homes', {
              templateUrl: 'views/homes.html',
              controller: 'HomesCtrl',
              controllerAs: 'homes'
         })
        .when('/people', {
                     templateUrl: 'views/person.html',
                     controller: 'PersonCtrl',
                     controllerAs: 'person'
          })
        .when('/electro_devices', {
                     templateUrl: 'views/electro_devices.html',
                     controller: 'ElectroDevicesCtrl',
                     controllerAs: 'electro_devices'
        })
         .when('/heaters', {
                             templateUrl: 'views/heaters.html',
                             controller: 'HeatersCtrl',
                             controllerAs: 'heater'
                })

      .otherwise({
        redirectTo: '/'
      });
  });
