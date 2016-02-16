// Controller.js

angular
  .module('presenceApp.controller', ['presenceApp.services'])
  .controller("MainCtrl", ['$scope', '$rootScope', 'Users', function($scope, $rootScope, Users) {

    $scope.users = Users.all();
    $scope.usersIn = Users.allIn();
    $scope.usersOut = Users.allOut();

    // MARK: - Summon button

    $scope.summon = function() {
      console.log("Summoning!");
    };

    // MARK: - Search bar

    $scope.searchText = ""

    $scope.onSearchQueryChange = function() {
      var searchText = $scope.searchText.toLowerCase();

      if (searchText == "/in") {
        $scope.users = Users.allIn();
      } else if (searchText == "/out") {
        $scope.users = Users.allOut();
      } else {
        $scope.users = Users.filterByName(searchText);
      }
      var userCount = $scope.users.length;
      if ($scope.searchText.length > 0) {
        $scope.resultsString = $scope.users.length + " mactching results.";
      } else {
        $scope.resultsString = $scope.usersIn.length + " users in. " + $scope.usersOut.length + " users out.";
      }
    };

    $scope.performSearch = function(query) {
      console.log("Performing search...");
    };

    $scope.resultsString = $scope.usersIn.length + " users in. " + $scope.usersOut.length + " users out.";

  }]);
