// Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string

// 1st  method**************************
// for loop
/*
function charCount(a, b) {
  let count = 0;

  for (let i = 0; i < b.length; i++) {
    if (b[i] === a) {
      count++;
    }
  }
  return count;
}
  */

// 2nd method   ***********************************************************************

// using map method
/*
function charCount(a, str) {
  let count = 0;

  // Use String split() method to
  // Convert String to an Array
  let arr = str.split("");

  arr.map((ar) => {
    if (ar === a) {
      count++;
    }
  });

  return count;
}
*/

// 3rd mthod******************************************
// for of loop
/*
function charCount(a, str) {
  let count = 0;

  // Use String split() method to
  // Convert String to an Array
  let arr = [...str];

  for (ar of arr) {
    if (ar === a) {
      count++;
    }
  }

  return count;
}
*/

// 4th method**************************************************
//using push method convert str to arr----------------------

function charCount(a, str) {
  let count = 0;

  let arr = [];

  let arrstr;

  for (let i = 0; i < str.length; i++) {
    arrstr = str[i];

    arr.push(arrstr);
  }
  console.log(arr);
  arr.map((ar) => {
    if (ar === a) {
      count++;
    }
  });

  return count;
}

console.log(charCount("a", "edabit"));
// ➞ 1
console.log(charCount("c", "Chamber of secrets"));
// ➞ 1
console.log(charCount("b", "big fat bubble"));
// ➞ 4
