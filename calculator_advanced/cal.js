var setting = prompt("Enter choice: (b)asic, (a)dvanced, (i)bmi, (t)rip")


switch (setting) {
  case "b":
    console.log("hello basic");

    BasicCal();
    break;
  case "a":
    advanCal();
    break;
  case "i":
    bmiCal();
    break;
  case "t":
    console.log("hello trip");
    break;
  default:
  alert("Wrong option! Refresh page");

}



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

  }
}
// function power(){
// var num1 = parseFloat(prompt("enter first number"));
// var num2 = parseFloat(prompt("enter second number"));
// result = num1 num2;
//   result = Math.pow(result);
//   alert(result);
// }
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

  }
}
function calBmiMetric(){
  var height = parseFloat(prompt("Enter height in cm:"))
  var weight = parseFloat(prompt("Enter weight in kg:"))
  var height2 = (height/100);
  alert("Your bmi is : "weight/(height2 * height2));

}
function calBmiImperial(){
  var height = prompt("Enter your height in inches");
  var weight = prompt("Enter your weight in pounds");

  if (height=="inches") height/=2.5;
  if (weight=="lb") weight/=2.2;

  var bmi = Math.round(weight / Math.pow(height, 2) * 10000);
  alert("Your bmi is: " + bmi);
}
