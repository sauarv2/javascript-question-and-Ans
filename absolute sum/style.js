/*Absolute Sum
Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

Examples
getAbsSum([2, -1, 4, 8, 10]) ➞ 25

getAbsSum([-3, -4, -10, -2, -3]) ➞ 22

getAbsSum([2, 4, 6, 8, 10]) ➞ 30

getAbsSum([-1]) ➞ 1

*/
/*

const getAbsSum = function (num) {
  let op = 0;
  const absolute = num.map((num) => Math.abs(num));

  absolute.forEach((abs) => {
    op += abs;
  });
  console.log(op);
};

getAbsSum([2, -1, 4, 8, 10]); // ➞ 25

getAbsSum([-3, -4, -10, -2, -3]); //➞ 22

getAbsSum([2, 4, 6, 8, 10]); //➞ 30

getAbsSum([-1]); //➞ 1
*/

const getAbsSum = function (num) {
  num.map((num) => Math.abs(num)).reduce((acc, curr) => acc + curr, 0);

  console.log(absolute);
};

getAbsSum([2, -1, 4, 8, 10]); // ➞ 25

getAbsSum([-3, -4, -10, -2, -3]); //➞ 22

getAbsSum([2, 4, 6, 8, 10]); //➞ 30

getAbsSum([-1]); //➞ 1
