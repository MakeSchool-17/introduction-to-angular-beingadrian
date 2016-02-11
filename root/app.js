// App.js

angular
  .module('redditApp', [])
  .controller("MainCtrl", ['$scope', function($scope) {

    $scope.pokemon = [
      {
        ndex: 25,
        name: 'Pikachu',
        type: 'Electric'
      },
      {
        ndex: 10,
        name: 'Caterpie',
        type: 'Bug'
      },
      {
        ndex: 39,
        name: 'Jigglypuff',
        type: 'Fairy'
      },
      {
        ndex: 94,
        name: 'Gengar',
        type: 'Ghost'
      },
      {
        ndex: 143,
        name: 'Snorlax',
        type: 'Normal'
      }
    ];

  }]);
