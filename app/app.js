'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])
//config routes
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}])
//declaring constant for use in all app
.constant('_', window._)
//add lodash to rootscope for global use
.run(function ($rootScope) {
  $rootScope._ = window._;
});