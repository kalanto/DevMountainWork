//Creat a person object using object literal
var person = {
   firstName: 'Scott',
   lastName: 'Booth',
   hairColor: 'Blond',
   eyeColor: 'Blue',
   location: 'Provo,UT'
      //the below function changes the firstName prop value when called
   changeName: function(name){
      this.firstName = name;
   }   //inoke with...    person.changeName("Bob");
}

//constuctor funtion
var person3 = function(firstName, lastName, username, email, password){
   this.firstName = firstName;
   this.lastName = lastName;
   this.username = username;
   this.email = email;
   this.password = password;
}
var bob = new person3('Bob', 'Dillion', 'Kalanto', 'sandrewbooth@gmail.com', 'pass123');

//Get the value of propert using DOT and Bracket
person.firstName;   //DOT notation is ****limited to strings only****
person['firstName'];    //Bracket notation

var newFirstName = firstName;
person[newFirstName] = 'sally';
//
//
//

var car = {
   make: 'Pinto',
   model: 'POS',
   color: 'Stolen primer gray',
   trasmition: 'Manual',
   year: '1970'
   location: 'Unknown'
}
for(var prop in car) {
   console.log(prop);  //prints out all properties.....make, model, etc..
}

for(var prop in car) {
   console.log(car[prop]);  //prints out all values......pinto, POS, etc..
}
//these are the same and assumes its a string
person.name;
person['name'];


///loops through the car object for color and if its equal to 'silver' it deletes the prop
for(var prop in car) {
   if(car[prop] === "silver"){
      delete car[prop]
   }

////loops through person object for 'blond' and chages the value to 'black' if the prop is equal to 'blond'

for(var prop in person){
   if(person[prop] === 'Blond'){
   person[prop] = 'Black';
   }
}


///loops through person object for for haircolor prop and changes the value to whatever you assign it to in this case 'black'
for(var prop in person){
   if (person.hasOwnProperty('haircolor')){
      person[prop] = 'Black';
      }
   }




//A method is a funciton within an object

//BUILT IN JAVASCTIPT CONSTRUCTORS
      //watch video to write these in
