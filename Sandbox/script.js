//create a function called practice that takes in a number as
//a paramter. If that number is divisible by 3, return 'dev'
//if that number is divisible by 5, return 'mtn'
//but if the number is divisible by 3 and 5, return 'dev mtn'
//otherwise, return 'none'


function practice(number) {
      if(number % 5 === 0 && number % 3 === 0)
      {
         return "dev mtn";
      }
      else if(number % 5 === 0){
         return "mtn";
      }
     else if(number % 3 === 0) {
      return "dev";
      }
      else{return "none"};
   }

console.log(practice(15))
