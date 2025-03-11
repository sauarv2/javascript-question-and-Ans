"use strict";
/*

Create a function that takes a string(a random name).If the last character of the name is an "n", return true, otherwise return false.
Examples

isLastCharacterN("Aiden") ➞ true

isLastCharacterN("Piet") ➞ false

isLastCharacterN("Bert") ➞ false

isLastCharacterN("Dean") ➞ true*/

/************************************************ */
// 1st process*********************************

// const isLastCharacterN = function (str) {
//   const toArr = str.split("");
//   const regex = /n/;
//   const find = toArr[toArr.length - 1] === "n" ? true : false;

//   console.log(find);
// };

// isLastCharacterN("Aiden"); // ➞ true

// isLastCharacterN("Piet"); // ➞ false

// isLastCharacterN("Bert"); // ➞ false

// isLastCharacterN("Dean"); // ➞ true*/

// const myRe = /d(b+)d/g;
// const myArray = myRe.exec("cdbbdbsbz");

// console.log(myArray);

/********************************************* */

// 2nd process*****************************************

const isLastCharacterN = function (str) {
  const toArr = str.split("");
  const regex = /n$/g;
  const find = regex.test(str);

  console.log(find);
};

isLastCharacterN("Aiden"); // ➞ true

isLastCharacterN("Piet"); // ➞ false

isLastCharacterN("Bert"); // ➞ false

isLastCharacterN("Dean"); // ➞ true
