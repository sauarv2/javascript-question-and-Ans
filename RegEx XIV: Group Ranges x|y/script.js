/*

const REGEXP = /blue|red/

"red flag".match(REGEXP)  // red
"blue flag".match(REGEXP)  // blue

// Matches "blue" in "blue flag" and "red" in "red flag".

Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.
Examples

"red flag blue flag".match(REGEXP) ➞ ["red flag", "blue flag"]

"yellow flag red flag blue flag green flag".match(REGEXP) ➞ ["red flag", "blue flag"]

"pink flag red flag black flag blue flag green flag red flag ".match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]


*/

const matching = function (str) {
  const regex = /red flag|blue flag/g;

  const ma = str.match(regex);

  return ma;
};

matching("red flag blue flag"); //➞ ["red flag", "blue flag"]
matching("yellow flag red flag blue flag green flag"); //["red flag", "blue flag"]
matching("pink flag red flag black flag blue flag green flag red flag"); //["red flag", "blue flag", "red flag"]
