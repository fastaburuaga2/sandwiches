angular.module('sandwiches').factory('SandwichFactory', [function(){
  var api = {};

  api.sandwiches = [];

  api.login = function (username, password) {
        // send along page information and the category type
        return $http.post("/login", {userid: username, passwd: password);
  };

  api.logout = function (username, password) {
        // send along page information and the category type
        return $http.get("/logout", {username: username, password: password);
  };

  api.me = function (username, password) {
        // send along page information and the category type
        return $http.post("/login", {username: username, password: password);
  };

  api.getSandwiches = function (username, password) {
        // send along page information and the category type
        return $http.post("/login", {username: username, password: password);
  };

  api.createSandwich = function (username, password) {
        // send along page information and the category type
        return $http.post("/login", {username: username, password: password);
  };

  api.editSandwich = function (username, password) {
        // send along page information and the category type
        return $http.post("/login", {username: username, password: password);
  };

  api.deleteSandwich = function (username, password) {
        // send along page information and the category type
        return $http.post("/login", {username: username, password: password);
  };


  return api;
}]);