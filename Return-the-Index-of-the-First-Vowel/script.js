/*
Create a function that returns the index of the first vowel in a string.
Examples

firstVowel("apple") ➞ 0

firstVowel("hello") ➞ 1

firstVowel("STRAWBERRY") ➞ 3

firstVowel("pInEaPPLe") ➞ 1

*/

function firstVowel(str) {
  let match = /[aeiouAEIOU]/.exec(str);
  if (match) {
    console.log("match found at " + match.index);
  } else {
    console.log(null);
  }
}

firstVowel("apple"); // ➞ 0

firstVowel("hello"); // ➞ 1

firstVowel("STRAWBERRY"); // ➞ 3

firstVowel("cdfghj"); // ➞ null
