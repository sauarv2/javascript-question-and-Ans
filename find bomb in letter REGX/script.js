/*

Find the Bomb

Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".
Examples

bomb("There is a bomb.") ➞ "Duck!!!"

bomb("Hey, did you think there is a bomb?") ➞ "Duck!!!"

bomb("This goes boom!!!") ➞ "There is no bomb, relax."

*/

const bomb = function (str) {
  //   const arr = str.split(" ");
  //   console.log(arr);
  //   const findBom = arr.find((arr) => arr === "bomb");
  //   console.log(findBom);
  const regex = /bomb/i;
  const findCH = regex.test(str);

  if (findCH) {
    return "Duck!!!";
  } else {
    return "There is no bomb, relax.";
  }
};
console.log(bomb("There is a bomb."));
// ➞ "Duck!!!"
console.log(bomb("Hey, did you think there is a bomb?"));
// ➞ "Duck!!!"
console.log(bomb("This goes boom!!!"));
// ➞ "There is no bomb, relax."
