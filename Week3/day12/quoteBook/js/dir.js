angular.module("quoteBook").controller("director", function($scope, service){
   $scope.test = "angular is working";

   $scope.quotes = service.getData();

   $scope.add = service.addData;

   $scope.remove = service.removeData;

});
