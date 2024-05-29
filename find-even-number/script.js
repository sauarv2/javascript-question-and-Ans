/*
Even All the Way
Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

*/

function getOnlyEvens(arr) {
  //   // Declaring empty Even array
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    }
    /*Inside the loop, the if statement checks if the current element (arr[i]) is even. It does this by using the modulo operator (%) to check if the remainder of dividing the number by 2 is zero.
If the current element is even, it is added to the even array using the push method.
*/
    console.log(even);
    //   console.log(odd);
  }
}

// function getOnlyEvens(number) {
//   let newArr = [];

//   number.forEach((num) => {
//     if (num % 2 == 0) {
//       newArr.push(num);
//     }
//   });

//   console.log(newArr);
// }

getOnlyEvens([1, 3, 2, 6, 4, 8]); //➞ [2, 4]

getOnlyEvens([0, 1, 2, 3, 4]); //➞ [0, 2, 4]

getOnlyEvens([1, 2, 3, 4, 5]); // ➞ []
