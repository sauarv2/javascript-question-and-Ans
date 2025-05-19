/*Create a function that takes a number as an argument and returns the highest digit in that number.

Examples
highestDigit(379) ➞ 9

highestDigit(2) ➞ 2

highestDigit(377401) ➞ 7


*/

// function highestDigit(num) {
//   let st = num + "";
//   const arrNum = Array.from(st, (x) => x);

//   let hightValue = Math.max(...arrNum);

//   console.log(hightValue);
// }
// *********************************************************************

function highestDigit(digit) {
  let tostr = String(digit); // number to string
  let Ctoarr = tostr.split(""); // to arrey

  // console.log(Ctoarr);
  let intial = 0; //for compare

  for (let i = 0; i < Ctoarr.length; i++) {
    if (Ctoarr[i] > intial) {
      // cheak which on is greater
      intial = Ctoarr[i];
    }
  }

  return intial;
}

console.log(highestDigit(379));
//➞ 9
console.log(highestDigit(2));
//➞ 2
console.log(highestDigit(377401));
// ➞ 7

/*


JavaScript
function highestDigit(num) {
  // ... function body ...
}
Use code with caution.
content_copy
The code starts with function highestDigit(num) {, which declares a function named highestDigit.
The function takes a single argument, num, which represents the non-negative integer for which we want to find the highest digit.
Converting Number to String and Splitting into Digits:

JavaScript
let st = num + "";
const arrNum = Array.from(st, (x) => x);
Use code with caution.
content_copy
Inside the function, let st = num + ""; converts the input number num to a string using string concatenation with an empty string. This is done because it's easier to iterate over the digits of a number when it's treated as a string of characters.
Then, const arrNum = Array.from(st, (x) => x); creates a new array named arrNum. The Array.from() method is used to convert the string st into an array of individual characters (digits). The arrow function (x) => x simply returns each character (digit) from the string st without any modification.
Finding the Highest Digit:

JavaScript
let hightValue = Math.max(...arrNum);
Use code with caution.
content_copy
let hightValue = Math.max(...arrNum); finds the highest digit among the digits in the arrNum array.
The Math.max() function is used to determine the largest value among the elements of an array.
In this case, we use the spread syntax (...arrNum) to pass all the elements of arrNum as individual arguments to Math.max(). This allows Math.max() to compare each digit in the array and return the highest one.
Printing the Result:

JavaScript
console.log(hightValue);
Use code with caution.
content_copy
Finally, console.log(hightValue); prints the value of hightValue (the highest digit) to the console.
Example Calls and Output:

JavaScript
highestDigit(379); //➞ 9
highestDigit(2); //➞ 2
highestDigit(377401); // ➞ 7
Use code with caution.
content_copy
When you call highestDigit(379), the function converts 379 to the string "379", splits it into ["3", "7", "9"], and Math.max() finds 9 as the highest digit.
Similarly, for highestDigit(2) and highestDigit(377401), the function correctly identifies 2 and 7 as the highest digits, respectively.



tune

share


more_vert


*/

/*
const array = [3, 6, 2, 56, 32, 5, 89, 32];

let intial = 0;

for (let i = 0; i <= array.length; i++) {
  if (array[i] > intial) {
    intial = array[i];
  }
}

console.log(intial);
*/
