// First prompt, user chooses which calculator they want to use.
var setting = prompt("Enter choice: (b)asic, (a)dvanced, (i)bmi, (t)rip");
// Switch - the user presses a key to run the correct function.
switch (setting) {
  case "b":
    BasicCal();
    break;
  case "a":
    advanCal();
    break;
  case "i":
    bmiCal();
    break;
  case "t":
  trip();
    break;
  default:
  alert("Wrong option! Refresh page");
  // if the user enters another choice which isn't given. This prompt will appear and the program will stop.
}
// first function for the basic calculator, user chooses numbers and operator.
function BasicCal(num1, num2) {
  var num1 = parseFloat(prompt("enter first number"));
  var operator = prompt("choose an operator")
  var num2 = parseFloat(prompt("enter second number"));
  if (operator == "+") {
    alert(num1 + num2);
  }
  else if (operator == "-") {
    alert(num1 - num2);
  }
  else if (operator == "*") {
    alert(num1 * num2);
  }
  else if (operator == "/") {
    alert(num1 / num2);
  }
}
// advanced calculator asks user for input before switching to next option.
function advanCal(option){
  var option = (prompt("Press 1 for Power or 2 for square root"));
  switch (option) {
    case "1":
       power();
    break;
    case "2":
      squareRoot();
      break;
    default:
    alert("not working")
// functions are called when the user enters either number 1 or 2.
  }
}
// asks for 2 numbers and stores the inputs in result before using math power.
 function power(){
 var num1 = parseFloat(prompt("enter first number"));
 var num2 = parseFloat(prompt("enter second number"));
 result = Math.pow(num1, num2);
  alert(result);
 }
function squareRoot(){
  var num3 = parseFloat(prompt("enter number to see square root"));
  num3 = Math.sqrt(num3);
  alert(num3);
}
function bmiCal(){
  var choice = prompt("choose 1 for imperial or 2 for metric");
  switch (choice) {
    case "1":
    calBmiImperial();
      break;
    case "2":
    calBmiMetric();
      break;
    default:
    alert("Choose either 1 or 2")
  }
}
function calBmiMetric(){
  var height = parseFloat(prompt("Enter height in cm:"))
  var weight = parseFloat(prompt("Enter weight in kg:"))
  var height2 = (height/100);
  alert(weight/(height2 * height2));
}
function calBmiImperial(){
  var height = prompt("Enter your height in inches");
  var weight = prompt("Enter your weight in pounds");
  if (height=="inches") height/=2.5;
  if (weight=="lb") weight/=2.2;

  var bmi = Math.round(weight / Math.pow(height, 2) * 703);
  alert("You're bmi is: " + bmi);
}
function trip(){
  var distance = parseFloat(prompt("Enter the distance"));
  // fuel is for miles per gallon
  var fuel = parseFloat(prompt("Enter fuel efficiency (mpg)"));
  var costPerGallon = parseFloat(prompt("Enter price per gallon"));
  var speed = parseFloat(prompt("Enter speed"));
  var time = distance/speed;
  var price;
  if (speed > 60 ) {
    var mpg = (speed % 60 * 2);
    var reduced_mpg = fuel -  mpg;
    price = (distance/reduced_mpg)*costPerGallon;
  }else {
    price = (distance/fuel)*costPerGallon;
  }
  alert("This is the price " + price +"\n" + "the trip will take " + time )
}
