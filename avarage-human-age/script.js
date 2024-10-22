/*

Coding Challenge #3
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§Data 1: [5, 2, 4, 1, 15, 8, 3]
§Data 2: [16, 6, 10, 5, 6, 1, 4]



// 1st method***********************************
*/

// let calcAverageHumanAge = function (age) {
//   let cal = age.reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
//   console.log(cal);
// };

// 2nd method*************************

// without reduce method*****************************

let calcAverageHumanAge = function (age) {
  let ini = 0;

  const absolute = age.map((ag) => Math.abs(ag));

  absolute.forEach((abs) => {
    ini += abs;
  });
  // return age.length;
  let arrLen = age.length;

  console.log(ini / arrLen);
};
/*

// 3rd method using loop method***********************

let Data1 = [5, 2, 4, 1, 15, 8, 3];
let Data2 = [16, 6, 10, 5, 6, 1, 4];

let calcAverageHumanAge = function (age) {
  let totalvalue = 0;

  for (let i = 0; i < age.length; i++) {
    totalvalue += age[i];
  }

  console.log(totalvalue / age.length);
};
//
calcAverageHumanAge(Data1);
calcAverageHumanAge(Data2);
*/
