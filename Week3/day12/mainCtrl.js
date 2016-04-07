angular.module('app')
   .controller('mainCtrl', function($scope, ourSvc) {
      $scope.reallyLike = ourSvc.reallyLike;
      $scope.kindaLike = ourSvc.kindaLike;

      $scope.addArtist = function(){
         var artistObj = buildArtist();
         ourSvc.addNewArtist(artistObj);
         //clearInputField();
      };

      function buildArtist(){
         return {
            name: $scope.artist,
            genre: $scope.genre,
            rating: $scope.rating
         };
      }

      // function clearInputField(){
      //    $scope.artist = "";
      //    $scope.genre = "";
      //    $scope.rating = "";
      // }

   });
