angular.module('angularService').service('ourSvc', function(){
    this.reallyLike = [];
    this.kindaLike = [];
    this.addNewArtist = function(artistObj){
        if(artistObj.rating >= 50) {
            this.reallyLike.push( buildArtist(artistObj.name, artistObj.genre, artistObj.rating));
        } else if(artistObj.rating < 50) {
            this.kindaLike.push();
         //   clearInputField();
        }
    };

    this.addNewArtist = function(artistObj) {
      this.reallyLike.push( {
            name: artistObj.name,
            genre: artistObj.genre,
            score: artistObj.score
        })
    }
});
