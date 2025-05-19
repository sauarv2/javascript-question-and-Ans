function numberSplit(num) {
  if (num === undefined) {
    return "please check th number";
    // This ensures the function doesn't process an undefined input.
  } else {
    let fastNum = Math.floor(num / 2);
    let secoundNum = num - fastNum;
    //The variable secdNum is assigned the remaining value after subtracting fstNum from num.
    let arr = [];
    //created to store the results of the split.
    -arr.push(fastNum, secoundNum);

    return arr;
  }
}

console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
//➞ [2, 2]

numberSplit(10); //➞ [5, 5]

numberSplit(11); //➞ [5, 6]

numberSplit(-9); //➞ [-5, -4]
