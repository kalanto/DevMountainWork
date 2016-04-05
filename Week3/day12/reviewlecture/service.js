//have to give them a name and tell them what to do
angular.module("app").service("svce", function(){

   this.count = function(array){
      return array.length;
   }
})
   angular.module("app").service('wrkr', function(){
      this.echoing = function(words){
         return words;
      }
})
