function numberSplit(num) {
  if (num === undefined) {
    return "please check th number";
  } else {
    let fastNum = Math.floor(num / 2);
    let secoundNum = num - fastNum;

    let arr = [];

    arr.push(fastNum, secoundNum);

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
