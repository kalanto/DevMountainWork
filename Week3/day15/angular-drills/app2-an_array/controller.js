angular.module("arrayApp").controller("arrayController", function($scope){
   $scope.test = "test working 1 2 3";

   $scope.get = function(){
      service.getData();
};

});
