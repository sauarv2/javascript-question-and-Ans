/*
Recursion: Factorials
Write a function that calculates the factorial of a number recursively.

Examples
factorial(5) ➞ 120

factorial(3) ➞ 6

factorial(1) ➞ 1

factorial(0) ➞ 1
*/

function factorial(n) {
  let ans = 1;

  if (n === 0) return 1;
  for (let i = 1; i <= n; i++) ans = ans * i;
  return ans;
}

// factorial(5) //➞ 120

// factorial(3) //➞ 6

// factorial(1) //➞ 1

// factorial(0) //➞ 1

/****************************************************** 2nd process */

// const factorial = function (n) {
//   if (n == 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(1));
console.log(factorial(0));

//➞ 120

factorial(3); //➞ 6

factorial(1); //➞ 1

factorial(0); //➞ 1
