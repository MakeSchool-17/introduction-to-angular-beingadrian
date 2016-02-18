// Controller.js

angular
  .module('presenceApp.controller', ['presenceApp.services'])
  .controller("MainCtrl", ['$scope', 'Users', function($scope, Users) {

    $scope.users = Users.all();
    $scope.results = Users.all();
    $scope.usersIn = Users.allIn();
    $scope.usersOut = Users.allOut();

    // MARK: - Summon button

    $scope.summon = function() {
      console.log("Summoning!");
    };

    $scope.loginLogout = function() {
      console.log("Log out...");
    };

    // MARK: - Search bar

    $scope.searchText = ""

    $scope.onSearchQueryChange = function() {
      var searchText = $scope.searchText.toLowerCase();

      if (searchText == "/in") {
        $scope.results = Users.allIn();
      } else if (searchText == "/out") {
        $scope.results = Users.allOut();
      } else if (searchText != "/") {
        $scope.results = Users.filterByName(searchText);
      }
      var userCount = $scope.results.length;
      if ($scope.searchText.length > 0) {
        if ($scope.results.length > 0) {
          $scope.resultsString = $scope.results.length + " mactching results.";
        }
      } else {
        $scope.resultsString = $scope.usersIn.length + " users in. " + $scope.usersOut.length + " users out. " + $scope.users.length + " users total."
      }
    };

    $scope.performSearch = function(query) {
      console.log("Performing search...");
    };

    $scope.resultsString = $scope.usersIn.length + " users in. " + $scope.usersOut.length + " users out.";

  }]);
