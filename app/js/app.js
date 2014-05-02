'use strict';

/* App Module */

var resurrectionApp = angular.module('resurrectionApp', [
  'ngRoute',
  'resurrectionController'
]);

resurrectionApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/band-list.html',
        controller: 'ListCtrl'
      }).
      when('/src/bands/:xId', {
        templateUrl: 'partials/band-detail.html',
        controller: 'BandDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);