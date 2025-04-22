/*
Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.
Examples

maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) ➞ 43

maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) ➞ 100

maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 40

Notes

You can select any 5 numbers from the given array to form maximum possible total.
*/
// 1st process ***********************
function maxTotal(arr) {
  let init = 0;
  let sorting = arr.sort((a, b) => b - a);

  for (let i = 0; i < 5; i++) {
    init += arr[i];
  }
  console.log(init);
}
// 2nd processs *******************
function maxTotal(nums) {
  // Sort the array in descending order
  const sorted = nums.sort((a, b) => b - a);
  // Sum the first 5 elements (largest numbers)
  return sorted.slice(0, 5).reduce((sum, num) => sum + num, 0);
}

maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]); //➞ 43

maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]); // ➞ 100

maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); //➞ 40
