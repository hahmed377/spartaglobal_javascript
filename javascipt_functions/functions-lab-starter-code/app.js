// 1. Write a function called 'multiply' that multiplies two numbers and returns the result
function multiply (number1, number2) {
    var result = number1 * number2;
    return result
}

// 2. Write a function called 'addThree' that adds three numbers together and returns the result
function addThree(number1, number2, number3) {
  var result = number1 + number2 + number3;
  return result
}

// 3. Write a function called 'smallestNumber' that returns the smaller of 2 numbers
function smallestNumber(number1, number2){
  if (number1 < number2){
    return number1;}
  else {
    return number2;
  }

}

// 4. Write a function called 'maxOfThree' that returns the largest of 3 numbers
function maxOfThree(number1,number2,number3){
  if (number1 > number2, number1 > number3){
    return number1;
  }
  if (number2 > number1, number2 > number3){
    return number2;
  }
  if (number3 > number2, number3 > number1){
    return number3;
  }
}
// var result = math.max(number1, number2, number3);
// return result


// 5. Write a function called 'reverseString' that returns the reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("");



// 6. Write a function called 'disemvowel' that returns the vowels from the string parameter
function disemvowel(vowels){
  return vowels.replace(/[aeiou]/ig, "");
  // g means for global searches whole strings
  // i would look at case senstive
}

// 7. Write a function called 'removeOdd' that removes all ODD number from an array
function removeOdd(array){
  for (var i = 0; i < array.length; i++) {
        while (array[i] % 2) {
            array.splice(i, 1);
        }
    }
    return array;
}
// 8. Write a function called 'removeEven' that removes all EVEN number from an array
function removeEven(array){
  for (var i = 0; i < array.length; i++) {
        while (array[i] % 2 ==0) {
            array.splice(i--, 1);
        }
    }
    return array;
}

// 9. Write a function called 'longestString' that takes an array of strings and returns the string with the longest character length
function longestString(array){
  var lg = null;
  var longest;
  for (var i=0; i < array.length; i++){
    if (array[i].length > lg) {
    lg = array[i].length;
    longest = array[i];

    }
  }
  return longest;
}

// 10. Write a function called 'allElementsExceptFirstThree' that discards the first 3 elements of an array,
// e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]

function allElementsExceptFirstThree(array){
  // array = array.reverse()
  // for (var i = 0; i < 3; i++) {
  //   array.pop();
  // }
  // return array.reverse();
array.splice(0,3);
return array;
//#### BONUS ####
}

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}

function convertArrayToAnObject(array){
  var temp = {};
  if ((array.length % 2) ==0) {
    for (var i = 0; i < array.length; i+=2) {
      temp[array[i]] = array[i + 1];

    }
  }
  return temp;
}

// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules
function fizzBuzz(number){
  var result = number;
  if ((number % 5) ==0 && (number % 3) ==0) {
    result = "FizzBuzz"
  }else if ((number % 5) ==0) {
    result = "Buzz";
  }else if ((number % 3) ==0) {
    result = "Fizz";
  }
  return result;
}
// But for multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
