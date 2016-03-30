function makeASandwhich(){
   console.log('starting')
   setTimeout(function()){
      console.log('done')
   }, 2000) //2 seconds
   setTimeout(function()){
      console.log('done2')
   }, 3000)
   setTimeout(function()){
      console.log('done3')
   }, 3000)
}
makeASandwhich()



////////////////////////////////////////////////////

function makeASandwhich(doneCallback){
   console.log('making a sandwhich')
   setTimeout(function()){
      doneCallback()
   }, 2000)
}

var sandwhichCallback = function(){
   console.log('so yummy');
}
makeASandwhich(sandwhichCallback)


//////////////////////////////////////////////////////


var names = {

   first: "Scott",
   middle: "A",
   last: "booth"

}

var mergedNames = _.map(names, function(nameObj){
   return nameObj.last ", " + nameObj.first + " " + nameObj.middle;
})

console.log(mergedNames)
/////////////////////////////////////////////////////////////////


var newNames = []
console.log(names);
for (var i = 0; i < names.length; i++) {
   var name = names[i];
   console.log(num.first)

   newNames.push(num.last + ", " + num.first + " " + num.middle)
}
console.log(newNames);
///////////same thing as above but done in a longer code///////////////

//////////////////////////////////////////////////////////////////////

{
   name: "bobo",
   diet: "bananas, bugs",
   sound: "Ooo Ooo",
   species: "Monkey"
}
//////ONLY CAPITIALIZE CONSTRUCTOR FUNCTIONS//////
var Animal = function (name, diet, sound, species){
   //this ={}
   this.name = name;
   this.diet = diet;
   this.sound = sound;
   this.species = species;
   //returns this
}

var boboMonkey = new Animal("Bobo", "Bananas, Bugs", "Ooo Ooo", "Monkey");
var charlesElephant = new Animal("Charles", "Peanuts, Hay", "RmFFFffff", "Elephant");


/////////////////////////////////////////////////////
{
  name: "Bobo",
  sound: "Ooo Ooo",
  diet: "Bananas, bugs",
  species: "Monkey"
}

var Animal = function(name, sound, diet, species){

  this.name = name;
  this.sound = sound;
  this.diet = diet;
  this.species = species;
}

Animal.prototype.makeSound = function () {
   console.log(this.species + "makes this sound " + this.sound);
}

var animalData = [ {
  name: "Bobo",
  sound: "Ooooo",
  diet: "bugs, bananas",
  species: "Monkey"
}, {
  name: "Charles", sound: "rmfffffff", diet: "Peanuts, hay", species: "Elephant"
},
 {
  name: "Steve", sound: "squak", diet: "bugs, fish", species: "Flaminco"
}]

var bobo = new Animal(animalData[0].name, animalData[0].sound, animalData[0].diet, animalData[0].species)

bobo.makeSound();

var animalObjects = _.map(animalData, function(animalInfo){
   return new Animal(animalInfo.name, animalInfo.sound, anima)
})

console.log(animalObjects);
/////////////////////////////////////////////////////////////

string.prototype.mrT = function() {
   return "I pity the Fool " + this;
}

var soccer = "I like soccer";
var soccer2 = soccer.mrT();

console.log(soccer2);
