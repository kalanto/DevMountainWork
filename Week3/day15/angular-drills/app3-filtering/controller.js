angular.module("app").controller("controller", function($scope, service){

   $scope.arrayData = service.get();

});
