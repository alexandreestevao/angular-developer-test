'use strict';

/* Serviços */

angular.module('openWeatherApp.services', ['ngResource'])

  //
  // Lista padrão de cidades
  //
  .value('exampleLocations',['Rio de Janeiro','Florianópolis','São Paulo','Porto Alegre','Belo Horizonte','Curitiba'])
  //
  // Lista padrão de cidades com possíveis tempestades
  //
  .value('stormLocations',['Chapecó','Manaus','Natal','Xanxere'])

  .factory('openWeatherMap', function($resource) {

    // A chave da API está atualizada (trabalhar com ou sem chave)
    var apiKey = 'b120ec704fad2518ba1f77caa50ff531';

    var apiBaseUrl = 'http://api.openweathermap.org/data/2.5/';

    return $resource(apiBaseUrl + ':path/:subPath?q=:location',
      {
        APPID: apiKey,
        mode: 'json',
        callback: 'JSON_CALLBACK',
        units: 'metric',
        lang: 'pt'
      },
      {
        queryWeather: {
          method: 'JSONP',
          params: {
            path: 'weather'
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        },
        queryForecast: {
          method: 'JSONP',
          params: {
            path: 'forecast'
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        },
        queryForecastDaily: {
          method: 'JSONP',
          params: {
            path: 'forecast',
            subPath: 'daily',
            cnt: 7
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        }
      }
    )
  });
