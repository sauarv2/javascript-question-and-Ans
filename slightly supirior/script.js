/*
Slightly Superior
You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

Create a function that returns whether the first array is slightly superior to that of the second.

*/

function isFirstSuperior(arr1, arr2) {
  if (arr1 > arr2) {
    return true;
  } else if (arr2 < arr1) {
    return false;
  } else {
    return false;
  }
}

console.log(isFirstSuperior([1, 2, 4], [1, 2, 3]));
//➞ true
console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]));
// ➞ true
console.log(
  isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"])
);
//➞ true

console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]));
//➞ false

console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]));
//➞ false
