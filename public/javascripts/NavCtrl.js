angular.module('sandwiches').controller('NavCtrl', [
'$scope',
'$window',
function($scope, $window){
  $scope.scrollUp = function(){
      $(window).scrollTop(0);
  };

}]);