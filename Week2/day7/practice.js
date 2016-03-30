//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer//

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer//Allows you to refer to the "owner" of the function we're executing, or rath, to the object that a function is a methd of

  // 3) What is the difference between call and apply?

      //Answer//call points to the object to the left of the DOT and apply does the same but allows you to bass arrays as a parameter

               ////Call takes the value to be used as the this object inside the function as the first parameter, and the remaining arguments to be passed to the function are passed individually (separated by commas of course)

               //Apply function’s first parameter is also the value to be used as the this object inside the function, while the last parameter is an array of values (or the arguments object) to pass to the function.
  // 4) What does .bind do?

      //Answer//holds a reference to a function object and will hold the value until it is called/invoked


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
      username: "scott",
      email: "taco@delicioso.yum",
      getUsername: function(){
         return this.username;
      }
   }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

getUsername(user);

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

// function Car(make, model, year){
//    var Car = {
//       make: make,
//       model: model,
//       year: year
//    }
//     return Car;
// }
 function Car(make, model, year, moveCar){
    this.make= make;
    this.model= model;
    this.year= year;
    this.moveCar = function(){
      return this.move += 10}

}



var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
 getYear.call(Car);


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(myUser){
  console.log(this.username);
};

setTimeout(funtion{
   getMyUsername();
}.bind(this), 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
// undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //global scope

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
