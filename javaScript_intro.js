// First variable
var myString = "hello";

//  output variable
console.log (myString + "Everybody");

console.log(myString.length);

console.log(myString.indexOf("e"));

console.log (myString.substr(2,4));

var myNumber = 5;

console.log(myNumber + 3);

console.log(myNumber -2);

console.log(myNumber * 4);

console.log(myNumber / 5);

console.log(isFinite(myNumber));

var myArray = [5,6,7,"a","b"];

// properties
// how many items in the array
console.log(myArray.length);

// operators
// set a value in a specific position
myArray[2] = 8;
console.log(myArray);
// join two arrays
console.log(myArray + ["more" , "stuff"]);

// methods
// add another value to the end
myArray.push("I'm at the end");
console.log(myArray);
// remove and return the last element from an array
console.log(myArray.pop());
console.log(myArray);
// reverse an array
myArray.reverse();
console.log(myArray);

var myString = "5";
var myDecimalString = "2.5";
var myNumber = 3;

// change string to integer
console.log( parseInt(myString) + myNumber );

// change string to decimal ( float )
console.log( parseFloat(myDecimalString) + myNumber );

// change decimal to integer ( remove the point )
console.log( parseInt(myDecimalString) + myNumber );
