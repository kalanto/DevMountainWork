var app = angular.module('pokemon');

app.controller("control", function($scope, service){


$scope.text = "it works";

$scope.getPoke = function(pokePicker){
   service.getPoke($scope.pokePicker).then(function(whofarted){
      $scope.poke = whofarted;

   });

};
// $scope.get = $scope.getPoke();

});
