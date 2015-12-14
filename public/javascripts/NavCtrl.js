angular.module('sandwiches').controller('NavCtrl', [
'$scope',
'$window',
'$http',
'$state',
function($scope, $window, $http, $state){

	$http.get('/user').success(function(data){
      $scope.username = data;
    });

	$scope.scrollUp = function(){
	  $(window).scrollTop(0);
	};

	$scope.logout = function(){
		$http.get('/logout').success(function(data){
      		$window.location.reload();
    	});
	}

}]);