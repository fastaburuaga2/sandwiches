angular.module('sandwiches').controller('SandwichesCtrl', [
'$scope',
'$stateParams',
'SandwichFactory',
function($scope, $stateParams, SandwichFactory){

	$scope.breads = [{
		    id: 'wheat',
		    name: '9-Grain Wheat'
		  },
		  {
		    id: 'oat',
		    name: '9-Grain Honey Oat'
		  },
		  {
		    id: 'italian',
		    name: 'Italian'
		  },
		  {
		    id: 'parmesano',
		    name: 'Parmesan Oregano'
		  }
	];

	$scope.meats = [{
		    id: 'chicken',
		    name: 'Sweet Onion Chicken Tariyaki'
		  },
		  {
		    id: 'italian',
		    name: 'Italian B.M.T.'
		  },
		  {
		    id: 'turkey',
		    name: 'Turkey Breast'
		  },
		  {
		    id: 'tuna',
		    name: 'Tuna'
		  },
		  {
		    id: 'meatball',
		    name: 'Meatball Marinara'
		  },
		  {
		    id: 'ham',
		    name: 'Black Forest Ham'
		  }
	];

	$scope.vegetables = [{
		    id: 'lettuce',
		    name: 'Lettuce'
		  },
		  {
		    id: 'tomatoes',
		    name: 'Tomatoes'
		  },
		  {
		    id: 'cucumbers',
		    name: 'Cucumbers'
		  },
		  {
		    id: 'pickles',
		    name: 'Pickles'
		  },
		  {
		    id: 'peppers',
		    name: 'Peppers'
		  },
		  {
		    id: 'olives',
		    name: 'Olives'
		  },
		  {
		    id: 'jalapenos',
		    name: 'Jalapenos'
		  },
	];

	$scope.cheeses = [{
		    id: 'swiss',
		    name: 'Swiss'
		  },
		  {
		    id: 'cheddar',
		    name: 'Cheddar'
		  },
		  {
		    id: 'american',
		    name: 'American'
		  },
		  {
		    id: 'mozzarella',
		    name: 'Mozzarella'
		  }
	];


	$scope.sauces = [{
		    id: 'mustard',
		    name: 'Mustard'
		  },
		  {
		    id: 'onion',
		    name: 'Onion'
		  },
		  {
		    id: 'mayo',
		    name: 'Mayo'
		  },
		  {
		    id: 'oliveoil',
		    name: 'Oliveoil'
		  },
		  {
		    id: 'chilli',
		    name: 'Chilli'
		  },
		  {
		    id: 'ketchup',
		    name: 'Ketchup'
		  },
		  {
		    id: 'bbq',
		    name: 'Bbq'
		  },
		  {
		    id: 'ranch',
		    name: 'Ranch'
		  }
	];

	$scope.addSandwich = function(){
		

		// maybe need some input validation
		
		$scope.selectedBreads = {};
		angular.forEach($scope.breads, function(bread){
		    if (!!bread.selected) {$scope.selectedBreads[bread.id]=true;}
		    else {$scope.selectedBreads[bread.id]=false;}
		 });
		console.log($scope.selectedBreads);

		$scope.selectedMeats = {};
		angular.forEach($scope.meats, function(meat){
		    if (!!meat.selected) {$scope.selectedMeats[meat.id]=true;}
		    else {$scope.selectedMeats[meat.id]=false;}
		 });
		console.log($scope.selectedMeats);

		$scope.selectedVegetables = {};
		angular.forEach($scope.vegetables, function(vegetable){
		    if (!!vegetable.selected) {$scope.selectedVegetables[vegetable.id]=true;}
		    else {$scope.selectedVegetables[vegetable.id]=false;}
		 });
		console.log($scope.selectedVegetables);

		$scope.selectedCheese = {};
		angular.forEach($scope.cheeses, function(cheese){
		    if (!!cheese.selected) {$scope.selectedCheese[cheese.id]=true;}
		    else {$scope.selectedCheese[cheese.id]=false;}
		 });
		console.log($scope.selectedCheese);

		$scope.selectedSauce = {};
		angular.forEach($scope.sauces, function(sauce){
		    if (!!sauce.selected) {$scope.selectedSauce[sauce.id]=true;}
		    else {$scope.selectedSauce[sauce.id]=false;}
		 });
		console.log($scope.selectedSauce);

	}

}]);