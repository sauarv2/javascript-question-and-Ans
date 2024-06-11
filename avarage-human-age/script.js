/*

Coding Challenge #3
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§Data 1: [5, 2, 4, 1, 15, 8, 3]
§Data 2: [16, 6, 10, 5, 6, 1, 4]

*/

let calcAverageHumanAge = function (age) {
  let cal = age.reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
  console.log(cal);
};

let Data1 = [5, 2, 4, 1, 15, 8, 3];
let Data2 = [16, 6, 10, 5, 6, 1, 4];

calcAverageHumanAge(Data1);
calcAverageHumanAge(Data2);
