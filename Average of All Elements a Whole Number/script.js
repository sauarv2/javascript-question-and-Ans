/*
Is the Average of All Elements a Whole Number?
Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

Examples
isAvgWhole([1, 3]) ➞ true

isAvgWhole([1, 2, 3, 4]) ➞ false

isAvgWhole([1, 5, 6]) ➞ true

isAvgWhole([1, 1, 1]) ➞ true

isAvgWhole([9, 2, 2, 5]) ➞ false


*/

const isAvgWhole = function (num) {
  let avg = 0;
  num.forEach((num) => {
    avg += num;
  });

  console.log(avg % num.length === 0);
};

isAvgWhole([1, 3]); //➞ true

isAvgWhole([1, 2, 3, 4]); // ➞ false

isAvgWhole([1, 5, 6]); // ➞ true

isAvgWhole([1, 1, 1]); // ➞ true

isAvgWhole([9, 2, 2, 5]); //➞ false

/*/*************************** 2nd process */
/*
function isAvgWhole(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return false; // Can't have an average of an empty array
  }

  // Calculate the sum of all elements
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  // Check if the sum is divisible by the length of the array (i.e., whole number average)
  return sum % arr.length === 0;
}

*/
