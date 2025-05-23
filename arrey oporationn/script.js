/*
  
  x is the start of the range (inclusive).
    y is the end of the range (inclusive).
    n is the divisor to be checked against.

Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.
Examples

arrayOperation(1, 10, 3) ➞ [3, 6, 9]

arrayOperation(7, 9, 2) ➞ [8]

arrayOperation(15, 20, 7) ➞ []

*/

function arrayOperation(a, b, c) {
  let earr = [];
  for (let i = a; i <= b; i++) {
    if (i % c === 0) {
      earr.push(i);
    }
  }
  console.log(earr);
}

arrayOperation(1, 10, 3); //➞ [3, 6, 9]

arrayOperation(7, 9, 2); //➞ [8]

arrayOperation(15, 20, 7); // ➞ []
