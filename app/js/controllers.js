'use strict'

var resurrectionController = angular.module('resurrectionController', ['LocalStorageModule']);

resurrectionController.controller('DayCtrl', function($scope, $http) {
  
  $http.get('src/days/days.json').success(function(data) {
    $scope.days = data;
  });

});

resurrectionController.controller('ListCtrl', function($scope, $http) {

  $http.get('src/bands/bands.json').success(function(data) {
    $scope.bands = data;
  });

    $scope.orderProp = 'start';
    
    $scope.orderPropDay = 'id';
    
    $scope.filterBy = 'first';

    $scope.newFilter = function(day){
        $scope.filterBy = day.name;
    };

    $scope.fav = function(id, $scope, localStorageService){
      alert (id);
      localStorageService.set(id,'Favorite');
    };

});

resurrectionController.controller('BandDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('src/bands/' + $routeParams.xId + '.json').success(function(data) {
      $scope.band = data;
    });
  }]);

