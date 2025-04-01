/*
Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.

Here's an example hand:


[
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
]

The players maximumScore from playing all these tiles would be 1 + 5 + 10 + 8 + 2 + 1 + 1, or 28.
Examples


*/

// fast process******************************************************
/*
const maximumScore = function (arr) {
  let scroeArr = [];
  let init = 0;
  let accessArrey;
  for (let i = 0; i < arr.length; i++) {
    accessArrey = arr[i].score;
    scroeArr.push(accessArrey);
  }

  for (finalSC of scroeArr) {
    //arthemetic opt by for of loop
    init += finalSC;
  }
  return init;
};
*/
// 2nd process ******************************************

/*
const maximumScore = function (arr) {
  let scroeArr = [];
  let init = 0;
  let accessArrey;
  for (let i = 0; i < arr.length; i++) {
    accessArrey = arr[i].score;
    scroeArr.push(accessArrey);
  }
  for (let i = 0; i < scroeArr.length; i++) {
    init += scroeArr[i];
  }

  return init;
};
*/

// 3rd process ***************************

const maximumScore = function (arr) {
  let scroeArr = [];
  // let init = 0;
  let accessArrey;
  for (let i = 0; i < arr.length; i++) {
    accessArrey = arr[i].score;
    scroeArr.push(accessArrey);
  }

  let final = scroeArr.reduce((curr, acc) => curr + acc, 0);

  return final;
};

console.log(
  maximumScore([
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
  ])
);
// ➞ 28
console.log(
  maximumScore([
    { tile: "B", score: 2 },
    { tile: "V", score: 4 },
    { tile: "F", score: 4 },
    { tile: "U", score: 1 },
    { tile: "D", score: 2 },
    { tile: "O", score: 1 },
    { tile: "U", score: 1 },
  ])
);

// ➞ 15

/*
// Access the name of the first object (index 0)
const firstObjectName = myArray[0].name; // 'Alice'
console.log(firstObjectName);

// Access the age of the second object (index 1)
const secondObjectAge = myArray[1].age; // 25
console.log(secondObjectAge);

// Access the name of the third object using bracket notation
const thirdObjectName = myArray[2]['name']; // 'Charlie'
console.log(thirdObjectName);

*/
