angular.module("arrayApp").controller("arrayController", function($scope, arrayService){
   $scope.test= "it works";

$scope.people = arrayService.getData();

});
