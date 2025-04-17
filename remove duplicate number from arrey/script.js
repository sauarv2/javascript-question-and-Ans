/*
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // [1, 2, 3, 4]

// The Set object is a data structure for storing unique values. By using the decomposition operator, we can convert the Set object into an array containing only the unique elements.

/**************************************************************** */
// Method 2: Using the reduce method

// const array = [1, 2, 3, 4, 1, 2, 3];
// const uniqueArray = array.reduce((accumulator, currentValue) => {
//   if (!accumulator.includes(currentValue)) {
//     accumulator.push(currentValue);
//   }
//   return accumulator;
// }, []);
// console.log(uniqueArray); // [1, 2, 3, 4]

// method 3 using filter method ***************
/*
const array = [1, 2, 3, 4, 1, 2, 3];

function removeDulblicateArrey(arr) {
  const findDublicate = arr.filter((Val, i) => arr.indexOf(Val) === i);
  console.log(findDublicate);
}

console.log(removeDulblicateArrey(array));

*/
/************************************************** */
// We can also use the filter method to retrieve the duplicate values from the array by simply adjusting our condition.

// function removeDulblicateArrey(arr) {
//   const findDublicate = arr.filter((Val, i) => arr.indexOf(Val) !== i);
//   //   console.log(findDublicate);
// }

// console.log(removeDulblicateArrey(array));
/*
//for each method***************************************
const array = [1, 6, 2, 3, 4, 1, 2, 3, 5];

function removeDulblicateArrey(arr) {
  let un = [];

  arr.forEach((element) => {
    if (!un.includes(element)) un.push(element);
  });
  return un;
}

console.log(removeDulblicateArrey(array));

*/

// re
