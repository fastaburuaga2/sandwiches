angular.module('sandwiches').config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/javascripts/templates/home.html',
      controller: 'MainCtrl'
    })
    .state('sandwiches', {
      url: '/sandwiches/{id}',
	    templateUrl: '/javascripts/templates/sandwiches.html',
	    controller: 'SandwichesCtrl'
	  })
    .state('edit', {
      url: '/edit/{id}',
      templateUrl: '/javascripts/templates/edit.html',
      controller: 'SandwichesCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);