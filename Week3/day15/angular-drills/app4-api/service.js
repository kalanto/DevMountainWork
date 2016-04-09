angular.module("appApi").service("serviceApi", function($http){



   this.getApi = function(){
      return $http({
         method: "GET",
         URL: "http://swapi.co/api/people/5/"
      }).then(function(response){
         console.log(response);
         return response.data;
      });

   };this.getApi();
});
