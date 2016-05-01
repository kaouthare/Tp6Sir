
'use strict';

/**
 * @ngdoc function
 * @name yomanApp.controller:HeatersCtrl
 * @description
 * # HeatersCtrl
 * Controller of the yomanApp
 */

 var sirApp = angular.module('yomanApp');

  sirApp.controller('HeatersCtrl', function($scope, $log, $http, $location){
            $scope.user = {};
			$scope.persons = [];
           $scope.submitForm = function(){
				  $http({
                      url: '/rest/heaters/ajouter',
                      method: 'POST',
                      data: $scope.user
                  }).success(function(data){
                    if (!data.errors) {
                         $location.path('/heaters');
                      }
                  });
              };

			$http({
              url: '/rest/heaters/lister',
              method: 'GET',
          }).then(function successCallback(response) {
              console.log(response.data.heaters);
			  $scope.heaters = response.data.heaters;
			  console.log($scope.heaters);

          });
  });




