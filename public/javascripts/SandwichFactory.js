angular.module('sandwiches').factory('SandwichFactory', ['$http','$state', function($http, $state){
  var api = {};

  api.sandwiches = [];

  api.login = function (username, password) {
        // send along page information and the category type
        return $http.post("/api/login", {userid: username, passwd: password});
  };

  api.logout = function (username, password) {
        // send along page information and the category type
        return $http.get("/logout", {username: username, password: password});
  };

  api.getUser = function (username, password) {
        // send along page information and the category type
        return $http.post("/login", {username: username, password: password});
  };

  api.getSandwiches = function (username, password) {
        // send along page information and the category type
        return $http.post("/login", {username: username, password: password});
  };

////////AQUI
  api.getAll = function() {
    return $http.get('/sandwiches').success(function(data){
      angular.copy(data, o.sandwiches);
    });
  };

  
  api.createSandwich = function (sandwich) {
        return $http.post("/create", sandwich).success(function(data){
          console.log('Sandwich created succesfully');
          $state.go('home');

    });
  };

  api.editSandwich = function (username, password) {
        // send along page information and the category type
        return $http.post("/login", {username: username, password: password});
  };

  api.deleteSandwich = function (username, password) {
        // send along page information and the category type
        return $http.post("/login", {username: username, password: password});
  };


  return api;
}]);