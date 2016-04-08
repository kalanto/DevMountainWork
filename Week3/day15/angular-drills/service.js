var app = angular.module('pokemon');

app.service("service", function($http){

   this.getPoke = function(pokePicker){
      return $http({
         method: "GET",
         url: "http://pokeapi.co/api/v2/pokemon/" + pokePicker + "/"
      }).then(function(response){
         console.log(response);
         return response.data;
      });
   };

});
