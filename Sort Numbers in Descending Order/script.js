/*
Create a function that takes any non-negative number as an argument and return it with its digits in descending order. Descending order is when you sort from highest to lowest.
Examples

sortDescending(123) ➞ 321

sortDescending(1254859723) ➞ 9875543221

sortDescending(73065) ➞ 76530

*/
// 1st processs **************************
/*
const sortDescending = function (num) {
  let tostr = "" + num;

  let toarrey = tostr.split("");
  let DesendingOdr = toarrey.sort((a, b) => b - a);
  console.log(DesendingOdr.join(""));
};
*/
// 2nd method ***************
const sortDescending = function (num) {
  let tostr = "" + num;
  let arr;
  let toarrey = tostr.split("");

  for (let i = toarrey.length; i <= toarrey.length - 1; i++) {
    arr = toarrey[i];
  }
  console.log(arr);
};

// 2nd processs ***********************************

sortDescending(123); //➞ 321

sortDescending(1254859723); //➞ 9875543221

sortDescending(73065); //➞ 76530
