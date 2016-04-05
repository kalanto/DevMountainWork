//call services by name
angular.module("app").controller("controller", function($scope, svce, wrkr) {
   $scope.test="text appears and it works";



   $scope.count1 = svce.count([1,2,3,4,5,6,7]);
      
});
