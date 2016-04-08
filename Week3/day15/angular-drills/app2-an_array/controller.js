angular.module("arrayApp").controller("arrayController", function($scope, service){
   // $scope.test = "test working 1 2 3";

   $scope.people = service.getData();

});
