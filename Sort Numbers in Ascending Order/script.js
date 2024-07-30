// question******------------------------------------
/*
Sort Numbers in Ascending Order

Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

    Sort numbers array in ascending order.
    If the function's argument is null, an empty array, or undefined; return an empty array.
    Return a new array of sorted numbers.

Examples

sortNumsAscending([1, 2, 10, 50, 5]) ➞ [1, 2, 5, 10, 50]

sortNumsAscending([80, 29, 4, -95, -24, 85]) ➞ [-95, -24, 4, 29, 80, 85]

sortNumsAscending(null) ➞ []

sortNumsAscending([]) ➞ []
*/
/*

// method one*********************************
function sortNumsAscending(nums) {
  // Handle empty or null input
  if (!nums || nums.length === 0) {
    return [];
  }

  // Create a copy of the original array to avoid modifying it
  const sortedNums = [...nums];
  //   console.log("sorted " + sortedNums);
  // Sort the copied array in ascending order
  sortedNums.sort((a, b) => a - b);

  return sortedNums;
}

sortNumsAscending([1, 2, 10, 50, 5]); // ➞ [1, 2, 5, 10, 50]

sortNumsAscending([80, 29, 4, -95, -24, 85]); // ➞ [-95, -24, 4, 29, 80, 85]

sortNumsAscending(null); //➞ []

sortNumsAscending([]); //➞ []

/************************************* */

// 2nd method**************---------------------------------------------------------------
/*
function sortNumsAscending(arr) {
  if (!arr || arr.length === 0) {
    return [];
  }
  return arr.slice().sort((a, b) => a - b);
}

// Examples
console.log(sortNumsAscending([1, 2, 10, 50, 5])); // ➞ [1, 2, 5, 10, 50]
console.log(sortNumsAscending(null)); // ➞ []
console.log(sortNumsAscending([])); // ➞ []
console.log(sortNumsAscending([20, 3, 1, 90, 50])); // ➞ [1, 3, 20, 50, 90]
*/

// document.body.click();

function dosome() {
  return;
   {
    success: true,
  }
}

console.log(dosome());
