var peopleNames = ['sally', 'bill', 'mark'];
   peopleNames['person'] = 'sally'; // will create a prop & value in the array

   // length
   // push
   // pop
   // shift/unshift
   // splice/slice
   // join
   // split
   // reverse
   // indexOf

   var users = [];

   var user1 = {
      firstName: "Scott",
      lastName: "Booth"
   }
   var user2 ={
      firstName = "Sally",
      lastName = "Martinez"
   }

   users.push(user1, user2)
//console logs all user arrays
for (var i = 0; i < users.length; i++) {
   console.log(users[i]);
}

//remove an item from arrays
function removeName(arr, name) {
   if (index >= 0) {
      arr.splice(index,1)
   }
   return arr
}

function removeItem(arr, item) {
   var index = arr.indexOf(item);
   if (index >= 0) {
      arr.splice(index,1)
   }
}

// creats a users array and add three user objects to it

var users = [];

var user1 = {
   firstName = "Ben",
   lastName = "Callis",
   email: "123@abc.com",
   username: "hacker",
   password: "iLoveTurtles5",
   age: "30"
}
var user2 = {
   firstName = "Scott",
   lastName = "Booth",
   email: "sandrewbooth@gmail.com",
   username: "sandrewbooth",
   password: "tacosTasteGood",
   age: "34"
}
var user3 = {
   firstName = "Maria",
   lastName = "Gonzales",
   email: "MGonzales@aol.com",
   username: "MGonzales",
   password: "hayzoos",
   age: "46"
}
//pushes user objects into the array
users.push(user1, user2, user3)

// function to search through the array locate the correct user object to be changed and changes the property(in this case "email") to a new value(in this case newEmail).
function chageEmail(array, user, email, newEmail){
   for (var i = 0; i < array.length; i++) {
      if(users[i][property] == value){
         array[i].email = newEmail;
      }
   }
   return array
}
//function to search through the array locate the correct user object by value and delete that user object

funtion deletUser(array, property, value)
   for (var i = 0; i < array.length; i++) {
      if(array[i][property] == value){
         delete array[i];
      }
      return array
   }


//function that loops through an entire array
function looper(array){
   for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
   }
}
looper(users); //to invoke the looper function aka... pushes the button
