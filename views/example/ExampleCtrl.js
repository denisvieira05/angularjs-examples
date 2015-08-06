(function() {

	'use strict';

	angular.module('ngExamples')
	.controller('ExampleCtrl', ['$scope', '$rootScope','$routeParams','$css', function($scope,$rootScope,routeParams,$css) {

		$css.add('../../data/examples/navbar/navbar.css');

	}]);

} ());