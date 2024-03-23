// function potatoes(op) {
//   const p = [];

//   const i = op.split("potato").length - 1;

//   return i;
// }

// console.log(potatoes("potato")); //➞ 1
// console.log(potatoes("potatopotato")); //➞ 2
// console.log(potatoes("potatoapple")); //1

/*
const str = "apple, cherries, green, apples, green, kiwi";

const ip = str.split(",").filter((str) => str.includes("green")).length;

console.log(ip); //2

*/

/*
1. Function Declaration:

function potatoes(op) { ... } defines a function named potatoes that takes a single argument op (presumably a string).
2. Unnecessary Array:

const p = []; declares an empty array named p, but it's not used within the function, so it's redundant.
3. Splitting the String:

const i = op.split("potato"); splits the input string op into an array of substrings using "potato" as the delimiter. This means the string is divided whenever the word "potato" occurs.
4. Returning the Array:

return i; returns the resulting array i, which contains the substrings created by the split.
5. Function Calls and Output:

The console.log statements call the potatoes function with different inputs and print the returned arrays:
potatoes("potato") returns [""] because the string "potato" is split into one empty string (before "potato") and one empty string (after "potato").
potatoes("potatopotato") returns ["", "", ""], as the string is split into three empty strings due to the two occurrences of "potato".
potatoes("potatoapple") returns ["", "apple"] because the string is split into one empty string (before "potato") and the substring "apple".
Key Points:

The function effectively counts the occurrences of the word "potato" in the input string by splitting the string and counting the number of elements in the resulting array (excluding the first element).
The empty array p is unnecessary and can be removed without affecting the function's behavior.

*/
