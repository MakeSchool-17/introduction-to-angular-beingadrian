// Resources.js

angular
  .module('presenceApp.services', [])
  .factory('Users', function() {

    var users = [
      {
        name: 'Pikachu',
        status: 'in'
      },
      {
        name: 'Caterpie',
        status: 'in'
      },
      {
        name: 'Jigglypuff',
        status: 'out'
      },
      {
        name: 'Gengar',
        status: 'out'
      },
      {
        name: 'Snorlax',
        status: 'out'
      },
      {
        name: 'Mew',
        status: 'in'
      },
      {
        name: 'Mewtwo',
        status: 'out'
      },
      {
        name: 'Magikarp',
        status: 'in'
      },
      {
        name: 'Dragonite',
        status: 'out'
      },
      {
        name: 'Mudkip',
        status: 'in'
      }
    ];

    return {
      all: function() {
        return users;
      },
      allIn: function() {
        return users.filter(function(user) {
          return user.status == 'in';
        });
      },
      allOut: function(){
        return users.filter(function(user) {
          return user.status == 'out';
        });
      },
      filter: function(queryString) {
        return users.filter(function(user) {
          var lowerName = user.name.toLowerCase();
          var lowerQueryString = queryString.toLowerCase();
          return lowerName.indexOf(lowerQueryString) > -1;
        });
      }
    };

  });
