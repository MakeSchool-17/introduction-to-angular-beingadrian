// Directives.js

angular
  .module('presenceApp.directives', [])
  .directive('sidebarList', function() {
    return {
      restrict: 'E',
      scope: {
        'title': '@',
        'data': '='
      },
      templateUrl: 'templates/sidebar_list.html'
    };
  })
  .directive('resultCards', function() {
    return {
      restrict: 'E',
      scope: {
        'data': '='
      },
      templateUrl: 'templates/result_card.html'
    }
  })
  .directive('actionButton', function() {
    return {
      restrict: 'E',
      scope: {
        'title': '@'
      },
      templateUrl: 'templates/action_button.html'
    }
  });
