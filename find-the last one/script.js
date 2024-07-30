// This question tests the understanding of the findLast method in JavaScript, which returns the value of the last element in the array that satisfies the provided testing function.

let arry = [4, 1, 3, 1, 2, 6, 5, 7, 2, 3, 4, 9];

let lastOne = arry.findLast((i) => i > 5);

console.log(lastOne);
