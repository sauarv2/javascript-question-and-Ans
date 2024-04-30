/*
Create a function that takes a string and returns a string in which each character is repeated once.

Examples
doubleChar("String") ➞ "SSttrriinngg"

doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

doubleChar("1234!_ ") ➞ "11223344!!__  "
*/
function doubleChar(str) {
  const op = str
    .split("")
    .map((strr) => strr.repeat(2))
    .join("");

  return op;
}
console.log(doubleChar("String"));
// ➞ "SSttrriinngg"
console.log(doubleChar("Hello World!")); // ➞ "HHeelllloo  WWoorrlldd!!"
console.log(doubleChar("1234!_ "));
// ➞ "11223344!!__  "
