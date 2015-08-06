(function() {

	'use strict';

	angular.module('ngExamples')
	.controller('ListCtrl', ['$scope', '$rootScope','$location', function($scope,$rootScope,$location) {

		$scope.goToExample = function(id){
			$location.path('example/'+id);
		}

	}]);

} ());