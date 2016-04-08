angular.module("app").controller("controller", function($scope, service){

$scope.test = "test";
      $scope.people = service.getPeople();
});
