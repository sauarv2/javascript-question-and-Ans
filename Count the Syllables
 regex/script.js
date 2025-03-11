/*

Count the Syllables

Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).
Examples

countSyllables("Hehehehehehe") ➞ 6

countSyllables("bobobobobobobobo") ➞ 8

countSyllables("NANANA") ➞ 3

*/

const countSyllables = function (str) {
  const strL = str.toLowerCase();

  for (let i = 0; i <= 0; i++) {
    const op = strL[i] + strL[i + 1];

    const regex = new RegExp(op, "g");

    const toarr = strL.split(regex).length;

    return toarr;
  }
};

countSyllables("Hehehehehehe"); // ➞ 6

countSyllables("bobobobobobobobo"); //➞ 8

countSyllables("NANANA"); //➞ 3
