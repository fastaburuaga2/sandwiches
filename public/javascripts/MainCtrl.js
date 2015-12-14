angular.module('sandwiches').controller('MainCtrl', ['$scope','$state', 'SandwichFactory', 
	function($scope, $state, SandwichFactory){
		var imageUrls = {
			chicken: 'http://w.subway.com/images/Menu/ZAM/Products/FlashFiles/RPLC_SWOCT_B.jpg',
			italian: 'http://w.subway.com/images/Menu/IND/Products/FlashFiles/RPLC_italian_bmt.jpg',
			turkey: 'http://w.subway.com/images/Menu/IND/Products/FlashFiles/RPLC_TurkeyBreast_BrownEdge_B.jpg',
			tuna: 'http://media1.subwaymexico.com.mx/images/menu/nutrition_tables/Atun.jpg',
			meatball: 'https://www.subway.com.au/assets/SubCreator/Full/SubMeatBall.png',
			ham: 'http://www.subway.com/Menu/Images/Menu/Categories_Products/menu-category-sandwich-trkbrstbfham.jpg'
		};

		SandwichFactory.getAll()
			.success(function(data){
	        	$scope.sandwiches = data.sandwiches;
	    	}
	    	);

		$scope.getSandwichPicture = function (sandwich) {
			if (sandwich.meats.chicken) return imageUrls.chicken;
			if (sandwich.meats.italian) return imageUrls.italian;
			if (sandwich.meats.turkey) return imageUrls.turkey;
			if (sandwich.meats.tuna) return imageUrls.tuna;
			if (sandwich.meats.meatball) return imageUrls.meatball;
			if (sandwich.meats.ham) return imageUrls.ham;
		};

		$scope.deleteSandwich = function(sandwich) {
			for (var i = $scope.sandwiches.length - 1; i >= 0; i--) {
				if ($scope.sandwiches[i]._id == sandwich._id) {
					$scope.sandwiches.splice(i, 1);
				}
			};
			SandwichFactory.deleteSandwich(sandwich._id);

		};


	}
]);