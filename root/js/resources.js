// Resources.js

angular
.module('presenceApp.services', ['firebase'])
  .factory('Users', ['$firebaseArray', function($firebaseArray) {

    var ref = new Firebase('https://mspresence.firebaseio.com/users');
    var users = $firebaseArray(ref);

    var refIn = ref.orderByChild('status').equalTo('in');
    var usersIn = $firebaseArray(refIn);

    var refOut = ref.orderByChild('status').equalTo('out');
    var usersOut = $firebaseArray(refOut);

    return {
      all: function() {
        return users;
      },
      allIn: function() {
        return usersIn;
      },
      allOut: function() {
        return usersOut;
      },
      filterByName: function(queryString) {
        return users.filter(function(user) {
          var lowerName = user.name.toLowerCase();
          var lowerQueryString = queryString.toLowerCase();
          return lowerName.indexOf(lowerQueryString) > -1;
        });
      }
    };

  }]);
