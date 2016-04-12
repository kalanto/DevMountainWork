var app = angular.module('nbaRoutes', 'teamData');
// the resolved data from the router needs to be injected into the controller
app.controller('teamCtrl', function ($scope, $stateParams, teamService, teamData) {
   $scope.teamData = teamData;
   $scope.newGame={};
   $scope.showNewGameForm = false;
   $scope.toggleNewGameForm = function($stateparams, teamData){
      $scope.showNewGameForm = true;
      if($stateparams === "utahjazz"){
         $scope.homeTeam = 'utahjazz';
         $scope.logoPath = 'images/jazz-logo.png';
      }
      if($stateparams === "losangeleslakers"){
         $scope.homeTeam = 'losangeleslakers';
         $scope.logoPath = 'images/lakers-logo.png';
      }
      if($stateparams === "miamiheat"){
         $scope.homeTeam = 'utahjazz';
         $scope.logoPath = 'images/heat-logo.png';
      }
   };

   $scope.submitGame = function(homeTeam){
      newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
   };
   teamService.addNewGame($scope.newGame).then(function(){
      getTeamData($scope.newGame.homeTeam);
   });
});
