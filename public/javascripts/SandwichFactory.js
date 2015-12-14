angular.module('sandwiches').factory('SandwichFactory', ['$http', function($http){
  var api = {};

  api.getAll = function() {
    return $http.get('/api/all');
  };

  api.createSandwich = function (sandwich) {
    return $http.post("/api/create", {sandwich: sandwich});
  };

  api.updateSandwich = function (sandwich) {
    return $http.put("/api/update", {sandwich: sandwich});
  };

  api.deleteSandwich = function (sandwichID) {
    return $http.delete("/api/delete/" + sandwichID);
  };

  api.updateOrder = function(sandwichesData) {
    return $http.put('/api/order', {sandwichesData: sandwichesData});
  };

  return api;
}]);