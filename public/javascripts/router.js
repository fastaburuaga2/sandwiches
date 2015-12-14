angular.module('sandwiches').config([
'$stateProvider',
'$locationProvider',
'$urlRouterProvider',
function($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/javascripts/templates/home.html',
      controller: 'MainCtrl'
    })
    .state('create', {
      url: '/create',
	    templateUrl: '/javascripts/templates/sandwiches.html',
	    controller: 'SandwichesCtrl'
	  })
    .state('edit', {
      url: '/edit/{id}',
      templateUrl: '/javascripts/templates/edit.html',
      controller: 'EditCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);