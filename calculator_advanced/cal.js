var setting = prompt("Enter choice: (b)asic, (a)dvanced, (i)bmi, (t)rip")


switch (setting) {
  case "b":
    console.log("hello basic");

    BasicCal();
    break;
  case "a":
    console.log("hello advanced");
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

    console.log (num1*num2);
  }
  else if (operator == "/") {

    alert(num1 / num2);
  }
}
