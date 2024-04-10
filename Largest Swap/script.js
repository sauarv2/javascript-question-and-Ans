/*
function largestSwap(num) {
  // Convert number to string to access individual digits

  const toString = num.toString();

  // Extract tens and ones digits

  let fristNum = parseInt(toString[0]);
  let secondNum = parseInt(toString[1]);

  // Swap digits and convert back to number
  const toNumber = secondNum * 10 + fristNum;

  // Compare original and swapped numbers
  return num >= toNumber;
}
*/
// 2nd preocess ******************************************

function largestSwap(num) {
  let rnum;
  if (typeof num !== "number") throw new TypeError("Invalid Number");
  rnum = num.toString();
  rnum = rnum.split("");
  rnum = rnum.reverse();
  rnum = rnum.join("");
  rnum = Number(rnum);
  return rnum < num;
}
console.log(largestSwap(27)); // False
console.log(largestSwap(43)); // True
console.log(largestSwap(14)); // False
console.log(largestSwap(53)); // True
console.log(largestSwap(99)); // True
