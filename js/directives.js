'use strict';

/* Directivas */

angular.module('openWeatherApp.directives', [])
 
  //
  // Diretiva que manipula a formatação, a busca de recursos
  // e a saída dos dados de tempo para uma data específica
  //
  .directive('weatherPanel',[function factory() {
    return {
      restrict: 'EA',

      scope: {
        useDayForecast: '=showEntry',
        forecast: '=weatherPanel'
      },

      templateUrl: 'partials/_weather-panel-light.html',

      link: function(scope, element, attrs) {
        // Obter URL da imagem do ícone
        scope.getIconImageUrl = function(iconName) {
          return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
        };

        scope.parseDate = function (time) {
          return new Date(time * 1000);
        };
      }
    }
  }])

//
// Edição "Wind"
//
.directive('weatherPanelWind',[function factory() {
  return {
    restrict: 'EA',

    scope: {
      useDayForecast: '=showEntry',
      forecast: '=weatherPanel'
    },

    templateUrl: 'partials/_weather-panel-wind.html',

    link: function(scope, element, attrs) {
      // Obter URL da imagem do ícone
      scope.getIconImageUrl = function(iconName) {
        return (iconName ? 'http://openweathermap.org/img/w/' + iconName + '.png' : '');
      };

      scope.parseDate = function (time) {
        return new Date(time * 1000);
      };
    }
  }
}]);

