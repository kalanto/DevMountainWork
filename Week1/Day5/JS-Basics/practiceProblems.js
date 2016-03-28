// create an array called 'myArray' that contains the numbers 1 - 5
  var myArray = [1, 2, 3, 4, 5];
// create an object called 'myObject' that contains three properties
  var myObject ={carName:Taco, carModel:Burrito, carColor:redSauce};
// write a 'print' function that prints out input
  function print(input){
    console.log(input);
  }
// print the second element of 'myArray' using the 'print' function
  var myArray = [1,2,3,4];
    console.log(myArray[1]);
// print the second property of 'myObject' using two different methods
  var myObject = {car : fun, dog : cat, taco : burrito};
    console.log(myObject.dog);
// write a function using a closure that adds two values (x and y) and returns the sum
  function closure(x,y){
    return x + y;
  }
// make the following code work:
// sum(2, 3) // => 5
// sum(2)(3) // => 5
 function a (a){
   var sum = a;
   function c(b){
     var sum1 = b;
     var tot = sum1 + sum;
     return c;
   }
 }

// add a sum method to the array prototype
// var arr = [1,2,3,4]
// arr.sum()  //returns 10
// var arr2 = [10, 28, 14, 33]
// arr2.sum() //returns 85


// write a function that will console log the numbers 1 through 5,
// with delays between each log equaling the logged number.
// delayLog() // pauses 1 second, then logs 1
// pauses 2 seconds after the previous log, then logs 2
// pauses 3 seconds after the previous log, then logs 3
// pauses 4 seconds after the previous log, then logs 4
// pauses 5 seconds after the previous log, then logs 5

 // write a function that takes in an array of numbers and determines whether those numbers are in order
 // ordered( [1, 2, 3, 7, 12] ) // true
 // ordered( [4, 9, 42, 22, 56] ) // false

// you are given an array of values.
// sum every number value in the array, and any nested arrays (to any depth).
// ignore all other types of values.
// arraySum([2, 3]) // 5
// arraySum([4, 4, [3, 2]) // 13
