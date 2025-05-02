/*
Numbers to Arrays and Vice Versa

Write two functions:

    toArray(), which converts a number to an array of its digits.
    toNumber(), which converts an array of digits back to its number.

Examples

toArray(235) ➞ [2, 3, 5]

toArray(0) ➞ [0]

toNumber([2, 3, 5]) ➞ 235

toNumber([0]) ➞ 0
*/

function toArray(data) {
  let value = typeof data === "number";

  if (value) {
    const toarr = data.toString().split("");
    console.log(toarr);
  } else {
    const toNumber = data.join();

    console.log(toNumber);
  }
}

toArray(235); // ➞ [2, 3, 5]

toArray(0); // ➞ [0]

toArray([2, 3, 5]); // ➞ 235

toArray([0]); // ➞ 0
