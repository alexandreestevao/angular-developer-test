'use strict';

/* Controllers */

angular.module('openWeatherApp.controllers', [])

  // Controlador "open weather map" para pesquisar os dados na api
  .controller('OpenWeatherCtrl',
    ['$scope','openWeatherMap','exampleLocations','stormLocations','ISO3166',
      function($scope,openWeatherMap,exampleLocations,stormLocations,ISO3166) {

    $scope.message = '';
    $scope.hasState = '';

    // Expor localizações de exemplo para $scope
    $scope.exampleLocations = exampleLocations;
    $scope.stormLocations = stormLocations;
    $scope.iconBaseUrl = 'http://openweathermap.org/img/w/';

    // Carregando os dados de inicialização
    $scope.forecast = openWeatherMap.queryForecastDaily({
      location: exampleLocations[ 0 ]
    });

    // Obter os dados da previsão local, conforme indicado no $scope.location
    $scope.getForecastByLocation = function() {

      if ($scope.location == '' || $scope.location == undefined) {
        $scope.hasState = 'has-warning';
        $scope.message = 'Por favor, forneça um local.';
        return;
      }

      $scope.hasState = 'has-success';

      $scope.forecast = openWeatherMap.queryForecastDaily({
        location: $scope.location
      });
    };

    // Set $scope.location and execute search on API
    $scope.setLocation = function(loc) {
      $scope.location = loc;
      $scope.getForecastByLocation();
    };

    // Get icon image url
    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    };

  }])
