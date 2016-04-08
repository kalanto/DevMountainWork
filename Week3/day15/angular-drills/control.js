var app = angular.module('pokemon');

app.controller("control", function($scope, service){


$scope.text = "it works";

$scope.getPoke = function(){
   service.getPoke().then(function(response){
      $scope.poke = response;
   });
};
$scope.getPoke();

});
