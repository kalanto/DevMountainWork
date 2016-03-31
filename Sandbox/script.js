var seahawks = {
  	name: "Seahawks",
	wins: 0,
	losses: 0
}

var eagles = {
  	name: "Eagles",
	wins: 0,
	losses: 0
}
/**** Do not edit the above objects *****/


// Code for teamWin function here.
function teamWin(obj1, obj2){
obj1.wins++;
obj2.losses++;
}

/**** Do not edit the function below ****/
var teamTrack = function(winTeam, loseTeam, callback){
	callback(winTeam, loseTeam)
}
