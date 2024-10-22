const array = [1, 2, 3, 4, 1, 2, 3];
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
