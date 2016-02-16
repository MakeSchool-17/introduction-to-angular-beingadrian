// Resources.js

angular
  .module('presenceApp.services', [])
  .factory('Users', function() {

    var users = [
      {
        name: 'Pikachu',
        status: 'in',
        photoUrl: 'http://vignette3.wikia.nocookie.net/pokemon/images/1/16/025Pikachu_OS_anime_10.png/revision/20150102074354'
      },
      {
        name: 'Caterpie',
        status: 'in',
        photoUrl: 'http://vignette3.wikia.nocookie.net/pokemon/images/8/89/010Caterpie_Dream.png/revision/latest?cb=20140911042209'
      },
      {
        name: 'Jigglypuff',
        status: 'out',
        photoUrl: 'http://www.nintenderos.com/wp-content/uploads/2015/06/pc-jigglypuff.jpg'
      },
      {
        name: 'Gengar',
        status: 'out',
        photoUrl: 'http://orig11.deviantart.net/3475/f/2012/015/0/f/gengar_the_shadow_pokemon_by_gengargrin-d4mf2te.jpg'
      },
      {
        name: 'Snorlax',
        status: 'out',
        photoUrl: 'http://vignette3.wikia.nocookie.net/pokemon/images/9/9f/143Snorlax_OS_anime.png/revision/latest?cb=20140924022259'
      },
      {
        name: 'Mew',
        status: 'in',
        photoUrl: 'http://img.pokemondb.net/artwork/mew.jpg'
      },
      {
        name: 'Mewtwo',
        status: 'out',
        photoUrl: 'http://cdn.bulbagarden.net/upload/thumb/7/78/150Mewtwo.png/250px-150Mewtwo.png'
      },
      {
        name: 'Magikarp',
        status: 'in',
        photoUrl: 'http://cdn.bulbagarden.net/upload/thumb/0/02/129Magikarp.png/250px-129Magikarp.png'
      },
      {
        name: 'Dragonite',
        status: 'out',
        photoUrl: 'http://vignette3.wikia.nocookie.net/pokemon/images/0/07/149Dragonite_AG_anime.png/revision/latest?cb=20140126094014'
      },
      {
        name: 'Mudkip',
        status: 'in',
        photoUrl: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png'
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
      filterByName: function(queryString) {
        return users.filter(function(user) {
          var lowerName = user.name.toLowerCase();
          var lowerQueryString = queryString.toLowerCase();
          return lowerName.indexOf(lowerQueryString) > -1;
        });
      }
    };

  });
