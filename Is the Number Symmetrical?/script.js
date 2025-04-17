/*

isSymmetrical(7227) ➞ true

isSymmetrical(12567) ➞ false

isSymmetrical(44444444) ➞ true

isSymmetrical(9939) ➞ false

isSymmetrical(1112111) ➞ true

*/

const isSymmetrical = (num) => {
  // to string***************
  let tostr = num + "";
  // convert to arrey and reerse and make a string *********
  let toarr = tostr.split("").reverse().join("");

  //
  return tostr === toarr;
};
console.log(isSymmetrical(7227));
// ➞ true

console.log(isSymmetrical(12567)); //➞ false

console.log(isSymmetrical(44444444));
//➞ true

console.log(isSymmetrical(9939)); // ➞ false
console.log(isSymmetrical(1112111));
// ➞ true
