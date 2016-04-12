var app = angular.module('nbaRoutes');

app.service('teamService', function ($http, $q) {
   this.addNewGame = function(gameObj){
      var deferred = $q.defer();
      var win = 0;
      var losses = 0;
      var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
         if(parseInt("gamObj.homeTeamScore") >    parseInt("gameObj.opponentScore")){
            gameObj.won = true;
         }
         else
            {gamObj.won = false;}
         $http({
            method: 'POST',
            url: url,
            data: gameObj
         }).then(function(response){
         });
         $http({
            method: 'GET',
            url: url
         }).then(function(data){
            var results = data.data.results;
            for(var i = 0; i < results.length; i++){
            if(results[i].won === true){
               wins++;
            }
            else{losses++;}
            results.wins = wins;
            results.losses = losses;
            deferred.resolve = results;
         }

         });
         return deferred.promise;
   };
   this.getTeamData = function(gameObj){
      return $http({
         method: 'GET',
         url: 'https://api.parse.com/1/classes/' + gameObj
      }).then(function(data){
         var results = data.data.results;
         for(var i = 0; i < results.length; i++){
         if(results[i].won === true){
            wins++;
         }
         else{losses++;}
         results.wins = wins;
         results.losses = losses;
         return results;
      }
      });
   };

});
