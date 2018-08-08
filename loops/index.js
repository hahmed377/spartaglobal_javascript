// for Loops

// for(var i = 0; i < 10; i++){
//   console.log("This is a loop " + i);
// }
//
// var myArray = ["Hanad", "is", "golfer"];
//
// for(var i =0; i < myArray.length; i++){
//   console.log(myArray[i]);
// }

// while Loops
// var i = 0;
// while (i < 5) {
//   console.log("This loop has run " + i + " times");
//   i++;
// }
// do while
// var number;
//
// do {
//   number = Math.random()
//   console.log(number);
// }while (number < 0.5);

// for in Loops
var myObject = new Object();

myObject.a = "1";
myObject.b = "2";
myObject.c = "3";

debugger;

for (var key in myObject) {
  console.log(key);
  console.log(myObject[key]);
}
