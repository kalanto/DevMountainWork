var app = angular.module('friendslist');

app.controller('mainCtrl', function($scope){
   $scope.friends = ['Berto', 'Pablo', 'Juan', 'Maria'];

$scope.addFriends = function(){
   $scope.friends.push($scope.newFriend);
   $scope.newFriend = "";
}
});
