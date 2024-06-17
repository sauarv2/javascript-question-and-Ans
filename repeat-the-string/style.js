// Recursion to Repeat a String n Number of Times
// Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.

// String.prototype.repeat() is not allowed

function repetition(st, num) {
  return st.repeat(num);
}
console.log(repetition("ab", 3));
//➞ "ababab"
console.log(repetition("kiwi", 2)); //➞ "kiwi"

console.log(repetition("cherry", 2));
//➞ "cherrycherry"

/********************** 2nd process */
// function repetition(txt, n) {
//   // Base case: when n is 0, return an empty string
//   if (n <= 0) return "";

//   // Recursive case: concatenate the string with the result of the same function call
//   return txt + repetition(txt, n - 1);
// }

// // Examples
// console.log(repetition("ab", 3)); // Output: "ababab"
// console.log(repetition("kiwi", 1)); // Output: "kiwi"
// console.log(repetition("cherry", 2)); // Output: "cherrycherry"
