/*
In this challenge you will be given a relation between two numbers, written as a string.Write a function that determines if the relation is true or false.
Examples

isTrue("2=2") ➞ true

isTrue("8<7") ➞ false

isTrue("5=13") ➞ false

isTrue("15>4") ➞ true
*/

function isTrue(str) {
  const regex = /[=<>]/g;
  const symbole = str.match(regex).join("");
}

isTrue("2<2"); //➞ true

// isTrue("8<7"); //➞ false

// isTrue("5=13"); // ➞ false

// isTrue("15>4"); //➞ true
