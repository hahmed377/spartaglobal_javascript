// code can see out but cant see in

// var outsideVariable = 5;
//
// function doSomething() {
//   console.log(outsideVariable);
// }
// doSomething();

// function doSomething() {
//   var insideVariable = 5;
//
// }
// doSomething();
// console.log(insideVariable);

// function firstFunction() {
//   console.log("I'm in the first function");
// }
// function secondFunction(){
//   firstFunction();
//   console.log("`I'm the second function");
// }
// secondFunction();

// nested function
// function joinStringsAndPrint(string1, string2) {
//   var newString = string1 + string2;
//
//   function printString(string){
//     console.log(string);
//     // q3 this will run
//     console.log(newString)
//     // q4 this will run
//     console.log(string1 + string2);
//   }
//   printString(newString);
//   return newString;
// }
// var string1 = "hello, :";
// var string2 = "world";
// var result = joinStringsAndPrint(string1, string2);
//
//  // q1 - wont work as as it is outside trying to call inside a fuction
//  printString("run from outside joinString")
//  // q2 wont work variable inside function
//  console.log(newString);

// passing functions as variables
// function sayHello(){
//   console.log("Hello");
// }
// function funCaller(functionToRun){
//   functionToRun()
// }
// funCaller(sayHello)
// timeout functions
// // declare the fuction
// function onTimerComplete(){
//   console.log("timer finished");
// }
// setTimeout(onTimerComplete, 3000);

// counter
// function createCounter() {
//   var total = 0;
//
//   return function() {
//     total++;
//     return total
//   }
// }
// var counter = createCounter();
//
// counter();
// counter();
// counter();
//
// var total = counter();
// console.log(total);

for (var i = 0; i < 10; i++) {
  setTimeout((function(j) {
    console.log(j);
  })(i), (i * 1000));
}
