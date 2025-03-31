/*
Create a function that takes an array of arrays with numbers.Return a new (single) array with the largest numbers of each.
Examples

findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]

findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]

Notes

Watch out for negative integers (numbers).

*/
// ************************* 1st method
/*
const findLargestNums = (a) => {
  let result = [];
  let op;
  let arr;
  for (let i = 0; i < a.length; i++) {
    arr = a[i];
    op = arr.reduce((prev, acc) => (acc < prev ? prev : acc), arr[0]);
    result.push(op);
  }
  return result;
  // .reduce((prev, cur) => {
  //   if (prev < cur) {
  //     return prev;
  //   } else {
  //     return cur;
  //   }
  // }, a[0]);
};
*/
/******************************** 2nd method */

const findLargestNums = (a) => {
  let result = [];
  let arr;
  let Farr;
  // looping multiplae arrey
  for (let i = 0; i < a.length; i++) {
    arr = a[i];
    Farr = arr[0];
    // looping one arrey
    for (let i = 1; i <= a.length; i++) {
      if (arr[i] > Farr) {
        Farr = arr[i];
      }
    }
    result.push(Farr); // push data in arrey
  }
  return result;
};

console.log(
  findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0, 4],
  ])
); // ➞ [7, 90, 2]
