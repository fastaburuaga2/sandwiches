angular.module('sandwiches').controller('MainCtrl', ['$scope','$state', 'SandwichFactory', 
	function($scope, $state, SandwichFactory){
		$scope.sandwiches = SandwichFactory.sandwiches;

		$scope.editSandwich = function() {

			var sandwich = SandwichFactory.getSandwich();
			$state.go('sandwiches');

		}

		$scope.deleteSandwich = function() {

			
		}

	}
]);