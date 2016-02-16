// App.js

angular
  .module('presenceApp', ['ui.router', 'presenceApp.controller', 'presenceApp.directives', 'ngResource'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'index.html',
        controller: 'MainCtrl'
      });
    $urlRouterProvider.otherwise('/');
  }]);
