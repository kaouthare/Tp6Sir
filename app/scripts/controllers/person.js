
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
                      url: '/rest/homes/ajouter',
                      method: 'POST',
                      data: $scope.home
                  }).success(function(data){
                    if (!data.errors) {
                         $location.path('/homes');
                      }
                  });
              };

			$http({
              url: '/rest/homes',
              method: 'GET',
          }).then(function successCallback(response) {
              console.log(response.data.person);
			  $scope.persons = response.data.person;
			  console.log($scope.persons);

          });
  });




