/*

Adding Numbers in a String

Given a string of numbers separated by a comma and space, return the total sum of all the numbers.
Examples

addNums("2, 5, 1, 8, 4") ➞ 20

addNums("1, 2, 3, 4, 5, 6, 7") ➞ 28

addNums("10") ➞ 10

*/

function addNums(num) {
  const arrr = num.split(", ");
  const sum = arrr.map((ar) => +ar).reduce((acc, cur) => acc + cur);
  console.log(sum);
}

addNums("2, 5, 1, 8, 4"); //➞ 20

addNums("1, 2, 3, 4, 5, 6, 7"); //➞ 28

addNums("10"); //➞ 10
