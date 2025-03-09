/*Find the Amount of Potatoes

Create a function to return the amount of potatoes there are in a string.
Examples

potatoes("potato") ➞ 1

potatoes("potatopotato") ➞ 2

potatoes("potatoapple") ➞ 1*/

const potatoes = function (str) {
  const regex = /potato/g;
  const arrfind = str.match(regex);

  return arrfind.length;
};

potatoes("potato"); //➞ 1

potatoes("potatopotato"); //➞ 2

potatoes("potatoapple"); //➞ 1
