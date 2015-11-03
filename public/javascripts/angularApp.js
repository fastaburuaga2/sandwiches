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
'$window',
'sandwiches',
function($scope, $window, sandwiches){
	$scope.sandwiches = sandwiches.sandwiches;
  
  $scope.scrollUp = function(){
      $(window).scrollTop(0);
  };

}]);






