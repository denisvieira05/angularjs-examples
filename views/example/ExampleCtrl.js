(function() {

	'use strict';

	angular.module('ngExamples')
	.directive('ngExample', function () {
	  return {
	  	controller: function ($scope, $css,$route,$http) {
	     

	      	    $scope.carregaJSON = function() {

		            $http.get('data/examples.json').then(function(resultado){
		                $scope.examples = resultado.data;
		                //console.log($scope.examples);	           

			            for(var i = 0; i < $scope.examples.length; i++) {
					        $scope.example = $scope.examples[i];
					        if($scope.example.id == $route.current.params.idExample) {
					            console.log('project-details',$scope.example);
					        return $scope.example;
					        }
				        }

					 });
		       	 }

        		$scope.carregaJSON();

        		

        	//$css.bind('../../data/examples/'+$scope.example.style, $scope);
	      
	    },
	    restrict: 'E',
	    //templateUrl: 'data/examples/{{example.html5}}'
	    
	  }
	})
	.controller('ExampleCtrl', ['$scope', '$rootScope','$routeParams','$css','$route', function($scope,$rootScope,routeParams,$css,$route) {
		$scope.$back = function() { 
		    window.history.back();
		};
		$scope.idExample =  (parseFloat($route.current.params.idExample))+1; 
		//console.log($scope.idExample);


		// $http.get('http://projetoifal.herokuapp.com/api/disciplinas?periodo='+sequencial).success(function(data) {

		// 		retorno.resolve(data);
		// 	})
		// 	.error(function() {

		// 		alert("Aconteceu algo ruim! Verifique sua conexão de internet");
		// 	}); 
	}]);

} ());