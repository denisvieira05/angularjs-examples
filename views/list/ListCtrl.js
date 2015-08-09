(function() {

	'use strict';

	angular.module('ngExamples')
	.controller('ListCtrl', ['$scope', '$rootScope','$location','$http', function($scope,$rootScope,$location,$http) {

	    $scope.carregaJSON = function() {
            $http.get('data/examples.json').then(function(resultado){
                $scope.examples = resultado.data;
                console.log($scope.examples);
            });
        }

        $scope.carregaJSON();
	}]);

} ());