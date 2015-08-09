(function() {

	'use strict';

	angular.module('ngExamples')
	.directive('myDirective', function () {
	  return {
	    restrict: 'E',
	    templateUrl: 'data/examples/navbar/navbar.html',
	    controller: function ($scope, $css) {
	      $css.bind('../../data/examples/navbar/navbar.css', $scope);

	    }
	  }
	})
	.controller('ExampleCtrl', ['$scope', '$rootScope','$routeParams','$css','$route', function($scope,$rootScope,routeParams,$css,$route) {
		$scope.$back = function() { 
		    window.history.back();
		};
		$scope.idExample =  (parseFloat($route.current.params.idExample))+1; 
		console.log($scope.idExample);
	}]);

} ());