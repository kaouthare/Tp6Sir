
'use strict';

/**
 * @ngdoc function
 * @name yomanApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the yomanApp
 */

 var sirApp = angular.module('yomanApp');

  sirApp.controller('HomesCtrl', function($scope, $log, $http, $location){
            $scope.user = {};
			$scope.persons = [];
           $scope.submitForm = function(){
				  $http({
                      url: '/rest/heaters/ajouter',
                      method: 'POST',
                      data: $scope.user
                  }).success(function(data){
                    if (!data.errors) {
                         $location.path('/homes');
                      }
                  });
              };

			$http({
              url: '/rest/heaters/lister',
              method: 'GET',
          }).then(function successCallback(response) {
              console.log(response.data.homes);
			  $scope.homes = response.data.homes;
			  console.log($scope.homes);

          });
  });
