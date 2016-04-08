var app = angular.module('pokemon');

app.service("service", function($http){

   this.getPoke = function(){
      // console.log("hit")
      return $http({
         method: "GET",
         url: "http://pokeapi.co/api/v2/pokemon/1"
      }).then(function(response){
         console.log(response);
         return response.data;
      });
   };

});
