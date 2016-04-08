angular.module("app").controller("controller", function($scope, service){
$scope.people = service.getPeople();
});
