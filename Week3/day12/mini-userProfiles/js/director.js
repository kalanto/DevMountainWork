angular.module("userProfiles").controller("director", function($scope, mainService){
   //$scope.test = "angular test its working/linked";

   $scope.getUsers = function(){
         $scope.users = mainService.getUsers();
   }

   $scope.getUsers();
})
