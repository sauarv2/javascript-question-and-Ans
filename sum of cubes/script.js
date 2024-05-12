function sumOfCubes(arr) {
  // Convert the set to an array, doubling each element
  const cube = Array.from(arr, (x) => x ** 3);
  //This line creates a new array cube by mapping each element x of the input array arr to its cube (x ** 3). Array.from() is used to create an array from an iterable object.

  let i = 0;
  cube.forEach((cb) => {
    i += cb;
    //This part initializes a variable i to store the sum and then iterates through each element cb of the cube array using forEach() method. In each iteration, it adds the current cube value cb to the variable i.
  });
  console.log(i);
}

sumOfCubes([1, 5, 9]);
//➞ 855

sumOfCubes([3, 4, 5]);
//➞ 216
sumOfCubes([2]);
//➞ 8
sumOfCubes([]);
//➞ 0

// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// const scores = [12, 55, 70, 47];

// let total = 0;
// scores.forEach((score) => {
//   total += score;
// });

// console.log(total);
