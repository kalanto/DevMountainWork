angular.module("app").controller("controller", function($scope, service){
 $scope.star = service.response;
});
