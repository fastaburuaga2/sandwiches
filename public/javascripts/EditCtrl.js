angular.module('sandwiches').controller('EditCtrl', [
'$scope',
'$stateParams',
'SandwichFactory',
function($scope, $stateParams, SandwichFactory){

	var sandwich = SandwichFactory.getSandwich('id'); //get the sandwich depending on the id in the url

	//Hopely this will set the checked checkboxes in the ui
	$scope.breads = sandwich.breadtype;
	$scope.size = sandwich.halfSize;
	$scope.meats = sandwich.meats;
	$scope.vegetables = sandwich.vegetables;
	$scope.cheeses = sandwich.cheeses;
	$scope.sauces = sandwich.sauces;

	$scope.editSandwich = function(){
		
		// maybe need some input validation
		var newSandwich = {};

		//BREAD TYPE
		$scope.selectedBreads = {};
		angular.forEach($scope.breads, function(bread){
		    if (!!bread.selected) {$scope.selectedBreads[bread.id]=true;}
		    else {$scope.selectedBreads[bread.id]=false;}
		 });
		newSandwich.breadtype = $scope.selectedBreads;

		//SIZE

		newSandwich.halfSize = $scope.size;

		//MEATS

		$scope.selectedMeats = {};
		angular.forEach($scope.meats, function(meat){
		    if (!!meat.selected) {$scope.selectedMeats[meat.id]=true;}
		    else {$scope.selectedMeats[meat.id]=false;}
		 });
		newSandwich.meats = $scope.selectedMeats;

		//VEGETABLES

		$scope.selectedVegetables = {};
		angular.forEach($scope.vegetables, function(vegetable){
		    if (!!vegetable.selected) {$scope.selectedVegetables[vegetable.id]=true;}
		    else {$scope.selectedVegetables[vegetable.id]=false;}
		 });
		newSandwich.vegetables = $scope.selectedVegetables;

		//CHEESE

		$scope.selectedCheese = {};
		angular.forEach($scope.cheeses, function(cheese){
		    if (!!cheese.selected) {$scope.selectedCheese[cheese.id]=true;}
		    else {$scope.selectedCheese[cheese.id]=false;}
		 });
		newSandwich.cheese = $scope.selectedCheese;

		//SAUCE

		$scope.selectedSauce = {};
		angular.forEach($scope.sauces, function(sauce){
		    if (!!sauce.selected) {$scope.selectedSauce[sauce.id]=true;}
		    else {$scope.selectedSauce[sauce.id]=false;}
		 });
		newSandwich.sauce = $scope.selectedSauce;

		//Instractions and name

		newSandwich.instractions = $scope.instractions;
		newSandwich.name = $scope.name;

		console.log(newSandwich);

		SandwichFactory.createSandwich(newSandwich);
	}

}]);