angular.module('sandwiches').controller('MainCtrl', ['$scope', 'SandwichFactory', 
	function($scope, SandwichFactory){
		$scope.sandwiches = SandwichFactory.sandwiches;

	}
]);