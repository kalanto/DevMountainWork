angular.module('app').directive('showTime', function(){
   $scope = {
      title : '=title'
   };
   return {
      restrict: 'EA',
      template: '<div ng-click="timeclick()">Hello {{name}} {{time}}</div>',
      link: function(scope, element, attrs){
         var currentTime = new Date();
         scope.time = currentTime.toString();
      },
      controller: function($scope){
         $scope.shortFormat = false;
         $scope.timeclick = function(){
            if($scope.shortFormat){
               $scope.time = new Date();
               $scope.time.toDateString();
            }else {
               $scope.time = new Date();
               $scope.time = $scope.time.toString();
            }
            $scope.shortFormat = !$scope.shortFormat;
         };
      }
   };
});
