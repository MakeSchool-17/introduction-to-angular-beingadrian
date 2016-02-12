// App.js

angular
  .module('presenceApp', ['presenceApp.services'])
  .controller("MainCtrl", ['$scope', 'Users', function($scope, Users) {

    $scope.users = Users.all();
    $scope.usersIn = Users.allIn();
    $scope.usersOut = Users.allOut();

    // summon button
    $scope.summon = function() {
      console.log("Summoning!");
    };

    // search bar
    $scope.searchBar = {
      text: ""
    };

    $scope.onSearchQueryChange = function() {
      var searchQuery = $scope.searchBar.text;
      $scope.users = Users.filter(searchQuery);
    };

    $scope.performSearch = function(query) {
      console.log("Performing search...");
    };

  }]);
