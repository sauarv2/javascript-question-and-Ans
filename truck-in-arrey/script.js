console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
// ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

tuckIn([15, 150], [45, 75, 35]); //➞ [15, 45, 75, 35, 150]

console.log(
  tuckout(
    [
      [1, 2],
      [5, 6],
    ],
    [[3, 4]]
  )
);

const op = [
  [1, 10],
  [2, 3, 4, 5, 6, 7, 8, 9],
];

// function tuckIn(a, b) {
//   const op = [a, b];

//   const result = op
//     .map((arr) => arr)
//     .flat()
//     .sort((d, f) => d - f);

//   return result;
// }

// function tuckout(a, b, c) {
//   const op = [a, b, c];

//   return op.flat().sort((k, l, p) => k - l - p);
// }

function tuckIn(arr1, arr2) {
  return [
    ...arr1.slice(0, Math.floor(arr1.length / 2)),
    ...arr2,
    ...arr1.slice(Math.floor(arr1.length / 2)),
  ];
}

// Test cases
console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])); // ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(tuckIn([15, 150], [45, 75, 35])); // ➞ [15, 45, 75, 35, 150]
console.log(
  tuckIn(
    [
      [1, 2],
      [5, 6],
    ],
    [[3, 4]]
  )
); // ➞ [[1, 2], [3, 4], [5, 6]]

/*

 Absolutely, the function tuckIn(arr1, arr2) takes two arrays and inserts the second array (arr2) in the middle of the first array (arr1). Here's a breakdown of how it works:

Finding the Middle:

Math.floor(arr1.length / 2) calculates the index that represents the middle of the first array (arr1).
The Math.floor function ensures we get the whole number index for the middle element, not including any decimals.
Slicing the First Array:

arr1.slice(0, Math.floor(arr1.length / 2)) extracts a sub-array from the beginning of arr1 up to (but not including) the middle index.
arr1.slice(Math.floor(arr1.length / 2)) extracts a sub-array from the middle index of arr1 to the end.
Spreading the Arrays:

The spread syntax (...) is used to unpack the elements of each sub-array and individual array into a single new array.
Combining the Parts:

The function essentially returns a new array by combining these parts:
The first part of the sliced arr1.
All the elements from arr2.
The second part of the sliced arr1.
For example, if arr1 is [1, 2, 3, 4] and arr2 is ['a', 'b'], the function would return [1, 2, 'a', 'b', 3, 4], effectively tucking arr2 in the middle of arr1.

This function provides a concise way to insert an array into the center of another array using modern JavaScript features like spread syntax and array slicing.

*/
