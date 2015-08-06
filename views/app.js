
(function () {
'use strict';

  angular.module('ngExamples', [
    'ngRoute','ngAnimate','btford.markdown','door3.css'
    ])
    .config(['$routeProvider', function($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'views/list/list.html',
          controller: 'ListCtrl'
        })
        .when('/example/:name', {
          templateUrl: 'views/example/example.html',
          controller: 'ExampleCtrl'
        })        
        .otherwise({
          redirectTo: '/'
        });
    }]);

}());