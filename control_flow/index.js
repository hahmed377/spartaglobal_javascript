// var moneyInPocket = parseFloat(prompt("How much money do you have"));
//
// var drinksDrunk = parseFloat(prompt("How many have you already had?"));
//
// var priceOfCrisp = parseFloat(prompt("How much are those crisps?"))
//
// if (moneyInPocket > 10 && drinksDrunk < 3) {
//   console.log("Another drink please!");
// }else if (moneyInPocket >5 || priceOfCrisp ==0) {
//   console.log("Just crisps then");
// }else {
//   console.log("go home");
//
// }
// if version
var name = "tim";

if (name === "bob") {
  console.log("hi bob");

}else if (name === "tim") {
  console.log("hi tim");
}else if (name === "steve") {
  console.log("hi steve");
}



// switch version
switch (name) {
  case "bob":
    console.log("hi bob");
    break;
  case "tim":
    console.log("hi tim");
    break
  case "steve":
    console.log("hi steve");
    break;
  default:
    console.log("hi default person");
}
