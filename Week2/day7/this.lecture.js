//recreate the slice method
function slice(arr, startIndex, endIndex){
var newArray=[];
   for(var = startIndex; i < endIndex; i++){
      newArray.push(arr[i]);
   }
   return newArray;
}
slice({1,2,3,4}, 0, 1);

/////////////////////////////

var sayName(name){
   console.log(name);
}
sayName('ben');

var me = {
   me: "ben",
   age: 29
}
me.sayName(); //prints out "ben"

////////////////////////////////////
RULE #1
IMPLICIT BINDING - LEFT OF THE DOT AT CALL TIME

////////////////////////////////////
function fireWeapon(player){           // funciton fireWeapon(){
   console.log(player.weapon.name)     // if(this === player){
}                                      //     console.log(player.weapon.name)
                                       //  }    }

VAR player ={
   name: "Taco Killer",
   weapon: { name:"Burrito Sword"},
   attack: function fireWeapon(player){
      console.log(player.weapon.name)
   }
}
VAR player2 ={
   name: "Jesus",
   weapon: { name:"Magic"},
   attack: fireWeapon //refrences the fireWeapon function but does not invoke it

fireWeapon(player);
player2.attack();




////////////////////////
var person = {
  name: "scott",
  location: "provo",
  age: 34,
  getInfo: function(){
    console.log(this.name + this.age + this.location);
  }
}
person.getInfo();
/////////////////////////


////////////////////------EXPLICT BINDING-------///////////////////



////////////----CALL-----///////////////////
function fireWeapon(range, power){
   console.log(range)
   console.log(power)
   console.log(this.weapon.name)
}
////invoke/////with//////
fireWeapon.call({
   weapon: {name: "Pistol"}
})
///OR///
fireWeapon.call(player, 10, 300);
///always call the object first and anything after will be passed as a parameter/argument





//////////////-------APPLY-------////////////////////////
///allows you to use and ARRAY////
fireWeapon.apply(player,[10,300])


//////////////----------BIND-------/////////////////////
var functionFactory(num1){
   return function(num2){
      ......
   }
}

var result = multiplier.bind(){
   val: 30
})                      //this binds the val to multiplier
result(2);              //this calls the binder

////bind hold a refernce to a function object but we have to call it
//it will hold the value until you call on it


function PlayerCreator(playerName, weaponName){
   var player = {
      name: playerName,
      weapon: weaponName
      fire: function() {
         console.log(this.weapon.name);
      }
   }
      return player;
}
//Now we can create a new player object with our constructor function PlayerCreator

function Player(playerName, weaponName){
   this.name: playerName;
   this.weapon: weaponName;
}////////////no need for a return it takes care of that for you//////////////////////

var player2 = new player('sumoMan', {weapon: 'Big Belly'})
/////////use the new keyword to create a new player profile otherwise the 'this' keyword points to the global scope.
