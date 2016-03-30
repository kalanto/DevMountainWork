function getEvens(arrNumbers){
   var evens = [];
   for(var i = 0; arrNumbers.length; i++){
      var number = arrNumbers[i];
      if(number % 2 === 0)
      evens.push(number)
      }
      return number;
}
console.log(getEvens([1,2,3,4,5,6,7,8]));

/////////////////////////////////////////////////////////////////////
function getDivisibleBy(arrNumbers, divisor){
   var divisibles = [];
   for(var i = 0; arrNumbers.length; i++){
      var number = arrNumbers[i];
      if(number % divisor === 0)
      divisibles.push(number)
      }
      return divisibles;
}
console.log(getEvens([1,2,3,4,5,6,7,8], 2));    ///cheks for evens//
console.log(getEvens([1,2,3,4,5,6,7,8], 3));    ////checks for divisble by 3//
console.log(getEvens([1,2,3,4,5,6,7,8], 5));    ///checkes for divisible by 5///

//////////////////////////////////////////////////////////////////


var numArray =["a", "b", "c"]

numArray[1]

var numObj = {
   l1:'a',
   l2:'b',
   l3:'c'
}

console.log(numObj.l1)
console.log(numObj['l2'])




////////////////////////////////////////////////////

ar bands = [
  {
    name: "Joe",
    email: "Joe@Icansingreallyhigh.com",
    artist: "Queen"
  },
  {
    artist: "LedZepplin",
    email: "DeadMepplin@gmail.com",
    name: "Dead Mepplin"
  },
  {
    artist: "DavidBowie",
    name: "Johnny Depp",
    email: "Imnotreallyhim@johnnydeppfan.com"
  },
  {
    name: "Joe",
    email: "Joe@Icansingreallyhigh.com",
    artist: "Queen"
  },
  {
    artist: "LedZepplin",
    email: "DeadMepplin@gmail.com",
    name: "Dead Mepplin"
  },
  {
    artist: "DavidBowie",
    name: "Johnny Depp",
    email: "Imnotreallyhim@johnnydeppfan.com"
  },
  {
    name: "Joey",
    email: "Joe@Icansingreallyhigh.com",
    artist: "BritneySpears"
  },
  {
    artist: "LedZepplin",
    email: "DeadMepplin@gmail.com",
    name: "Dead Mepplin"
  },
  {
    artist: "DavidBowie",
    name: "Johnny Mepp",
    email: "Imnotreallyhim@johnnydeppfan.com"
  },
   {
    artist: "DavidBowie",
    name: "Johnny Gepp",
    email: "Imnotreallyhim@johnnydeppfan.com"
  },
   {
    artist: "DavidBowie",
    name: "Johnny Smepp",
    email: "Imnotreallyhim@johnnydeppfan.com"
  }
];


function countCoverBands(coverRequests){
   /*
      var bands = {}

      var artist
      var artistCount
      for loop
            incrementCout artistCount

      return bands

   */


   var bands = {}
      for (var i = 0; i < coverRequests.length; i++) {
         var request = coverRequests[i];
         if (bands.hasOwnProperty(request.artist)) {
         bands[request.artist] += 1;
         }
      else {
         bands[request.artist] = 1;
      }
   return bands;
}

var totalResults = countCoverBands(bands);



function countCoverBands2(coverRequests){

   ar bands = {}
      for (var i = 0; i < coverRequests.length; i++) {
         var request = coverRequests[i];

         for (var j = 0; j < array.length; j++) {
            var existing band;
            if(bands[j].artists === reques.artist){
               existingBand = bands[j];
               break;
            }
         }
         if (bands.hasOwnProperty(request.artist)) {
            existingBand += 1;
         }
      else {
            bands.push({
               artist: request.artist,
               count: 1
            });
      }
   return bands;
   }
   var totalResults = countCoverBands(bands);
}

////////////////BELOW IS JS BIN COPY PASTE OF JEREMYS CODE///////////////////
// function countCoverBands2(coverRequests){
//   var bands = []
//
//   for(var i = 0; i < coverRequests.length; i++){
//     var request = coverRequests[i];
//
//     var existingBand = null;
//     for(var j = 0; j < bands.length; j++){
//         if(bands[j].artist === request.artist){
//             existingBand = bands[j];
//             break;
//         }
//     }
//
//     if(existingBand){
//         existingBand.count += 1;
//     } else {
//         bands.push({
//             artist: request.artist,
//             count: 1
//         });
//     }
//   }
//
//   return bands;
// }




/*///////////////////////CLOSURES/////////////////////////////////
aspect 1 a nested child function can access variables of the parent function

aspect 2 we take a snap shot in time of the parent variables
*/

function colorfactory(colorName){
   return function(){
      console.log("her is a " + colorName " paint can.")
   }
}
var redpaintCanFactory = colorfactory("Red");
var bluepaintCanFactory = colorfactory("blue");
var greenpaintCanFactory = colorfactory("green");
/// must assign the created factory to a new vaiable to take the snap shot

bluePaintCanFactory();
redpaintCanFactory();
greenpaintCanFactory();
///////////////////////////



function calorieTracker(baselineCalories){
   //totalCalories today
   var totalCaloriesToday = 0;
   var totalDays = 0;
   //totalCalories all time
   var totalCaloriesAllTime = 0;
   //personBaseLineCalories
         //in the parameters


   //addCalories()
   function reportEating(totalCaloriesConsumed){
      totalCaloriesToday += totalCaloriesConsumed;
   }
   //startNewDay()
   function startNewDay(){
      totalCaloriesToday = 0;
      totalCaloriesAllTime += totalCaloriesToday;
      totalDays++;
   }
   // estimated weight loss today()
   function getTodaysWeightLoss(){
      //3500cal = 1lb
      //today - baseline  / 3500
      return (totalCaloriesToday - baselineCalories) / 3500;
   }
   //estimated weight loss all time()
   function getAllTimeWeightLoss(){
      //3500cal = 1lb
      //today - baseline  / 3500
      return (totalCaloriesAllTime - (baselineCalories * totalDays)) / 3500;
   }
   return {
      reportEating: reportEating,
      startNewDay: startNewDay,
      getTodaysWeightLoss: getTodaysWeightLoss,
      getAllTimeWeightLoss: getAllTimeWeightLoss
   };
}

var wuansTracker = calorieTracker(2300);
var pingsTracker = calorieTracker(1800);
var sumoTracker = calorieTracker(8000);



wuansTracker.reportEating(3000);
wuansTracker.startNewDay();
wuansTracker.reportEating(2400);

sumoTracker.reportEating(3000);
sumoTracker.startNewDay();
sumoTracker.reportEating(2400);


console.log(wuansTracker.getTodaysWeightLoss());
console.log(wuansTracker.getAllTimeWeightLoss());
console.log(sumoTracker.getTodaysWeightLoss());
console.log(sumoTracker.getAllTimeWeightLoss());
console.log(pingsTracker.getTodaysWeightLoss());
console.log(pingsTracker.getAllTimeWeightLoss());



//////////////////////OBJECT MANIPULATION//////////////////////////////////////////

var cat = {
   name: "Dinah",
   breed: "Calico",
   weight: "34 Mice",
   mood: "grumpy",
   color: "snickers"
}

//DOT NOTATION

//get not on the left side of an equals
if(cat.weight > 17){
   console.log(cat.weight);
}
var catWeight = cat.weight;

function forSomeReasonWeCareAboutCatWeight(weight){
   console.log('we care about your cats weight :' + weight)
}
forSomeReasonWeCareAboutCatWeight(cat.weight);
//set - when on the left side of a single equals
cat.weight = 32;


//BRACKET NOTATION

if(cat[weight] > 17){
   console.log(cat["weight"]);
}
var catWeight = cat["weight"];

function forSomeReasonWeCareAboutCatWeight(weight){
   console.log('we care about your cats weight :' + weight)
}
forSomeReasonWeCareAboutCatWeight(cat[weight]);
//set - when on the left side of a single equals
cat["weight"] = 32;


//////////////////////////////////////////

var outfit = {
   shirt: {
      color: "blue",
      size: "medium",
      style: "t-shirt"
   }
   pants: {
      color: "orange",
      size: "small",
      style: "denim"
   }
}
//get
outfit.shirt.color

if (outfit.pants.size === "small") {
   console.log("Yikes")
}


//set
outfit.shirt.style = "ugly";


var calc = {
   total: 0
}

calc.total += 7;
calc.total -= 3;
calc.total = calc.total * 33;
calc.total = calc.total / 48;
