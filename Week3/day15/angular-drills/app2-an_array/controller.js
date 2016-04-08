angular.module("app").controller("controller", function($scope, service){
   // $scope.test = "working";
   $scope.people = service.getArrayData();
});
