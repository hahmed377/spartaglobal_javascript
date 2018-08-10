document.addEventListener("DOMContentLoaded", function(){



// access myButton

var myButton = document.getElementById('myButton');
console.log(myButton);

// event listener for our myButton
myButton.addEventListener("click", handleClick)

// handleClick function
function handleClick() {
  console.log("Button was clicked");
}
// access the myForm
var myForm = document.getElementById("myForm");
var name;
myForm.addEventListener("submit", function(event){
// prevents the default
  event.preventDefault();


  // capture name from input
  var firstNameField = document.getElementById("firstName");

  if (!firstNameField.value) {

    firstNameField.style.backgroundColor = "red";

  }else {
    name = firstNameField.value;
    console.log(name);
  }
})
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");

div1.addEventListener("click", function(event){
  event.stopPropagation();
  console.log("div1 was clicked");
})
div2.addEventListener("click", function(event){
  event.stopPropagation();
  console.log("div2 was clicked");
})
div3.addEventListener("click", function(event){
  event.stopPropagation();
  console.log("div3 was clicked");
})
})
