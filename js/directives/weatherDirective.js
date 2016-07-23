
      angular
      .module('taco')
      .directive('weather', function (API) {

  return {
    restrict: 'E', 
    scope: {},
    replace: true, 
    templateUrl:'./views/partials/weather.html',
    transclude: true, 

    // link method-boilerplate
    link: function (scope, element, attrs){
      var vm = scope;
      var city = attrs.city;
      var data = API.getWeather(city);
      data.then(function(response) {
        vm.data = response.data;
      });
      
    },
    
    // Standard Controller-boilerplate
    controller: function ($scope) {

    }
  };
});