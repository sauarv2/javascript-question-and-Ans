/*

A group of friends have decided to start a secret society.The name will be the first letter of each of their names, sorted in alphabetical order.

Create a function that takes in an array of names and returns the name of the secret society.
Examples

societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"

*/

function societyName(arr) {
  const earr = [];
  let pp = arr.forEach(function (ar) {
    earr.push(ar[0]);
  });
  const final = earr.sort().join("");
  console.log(final);
}

societyName(["Adam", "Sarah", "Malcolm"]); //➞ "AMS"

societyName(["Harry", "Newt", "Luna", "Cho"]); // ➞ "CHLN"

societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]); // ➞ "CJMPRR"
