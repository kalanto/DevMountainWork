angular.module("app").service("service", function($http){
   $http.get("http://swapi.co/api/people/1").then(function(response){
      console.log(response);
         return response.data;
   });
});
