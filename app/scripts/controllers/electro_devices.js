
'use strict';

/**
 * @ngdoc function
 * @name yomanApp.controller:ElectroDevicesCtrl
 * @description
 * # ElectroDevicesCtrl
 * Controller of the yomanApp
 */

 var sirApp = angular.module('yomanApp');

  sirApp.controller('ElectroDevicesCtrl', function($scope, $log, $http, $location){
            $scope.user = {};
			$scope.persons = [];
           $scope.submitForm = function(){
				  $http({
                      url: '/rest/ElectronicDevices/ajouter',
                      method: 'POST',
                      data: $scope.ElectronicDevices
                  }).success(function(data){
                    if (!data.errors) {
                         $location.path('/ElectronicDevices');
                      }
                  });
              };

			$http({
              url: '/rest/ElectronicDevices/lister',
              method: 'GET',
          }).then(function successCallback(response) {
              console.log(response.data.ElectronicDevices);
			  $scope.ElectronicDevices = response.data.ElectronicDevices;
			  console.log($scope.ElectronicDevices);

          });
  });




