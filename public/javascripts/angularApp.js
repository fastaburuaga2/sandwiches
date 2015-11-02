var app = angular.module('sandwiches', ['ui.router']);


app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })
    .state('sandwiches', {
	  url: '/sandwiches/{id}',
	  templateUrl: '/sandwiches.html',
	  controller: 'SandwichesCtrl'
	});

  $urlRouterProvider.otherwise('home');
}]);


app.factory('sandwiches', [function(){
  var o = {
    sandwiches: []
  };
  return o;
}]);


app.controller('SandwichesCtrl', [
'$scope',
'$stateParams',
'sandwiches',
function($scope, $stateParams, sandwiches){

}]);


app.controller('MainCtrl', [
'$scope',
'sandwiches',
function($scope,sandwiches){
	$scope.sandwiches = sandwiches.sandwiches;
  	$scope.test = 'Hello world!';
}]);






