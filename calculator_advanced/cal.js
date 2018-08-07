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
    console.log("hello bmi");
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
