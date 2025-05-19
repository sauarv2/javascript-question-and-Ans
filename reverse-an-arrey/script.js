//  1st process **************************
// const reverse = number.reduce((accum, curr) => [curr, ...accum], []);

// console.log(reverse);

// 2nd process********************

// const secnM = number.forEach((num, i) => {
//   console.log(num - 1);
// });
const arr = [];
let len = number.length - 1;
for (let i = len; i >= 0; i--) {
  arr.push(number[i]);
}

return arr;
