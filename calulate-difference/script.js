/*
Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

Examples
calculateDifference({ "baseball bat": 20 }, 5) ➞ 15

calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11

calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1
*/

function calculateDifference(a, d) {
  let valus = Object.values(a);
  //covert values into arrey
  let op = 0;

  valus.forEach((vl) => {
    return (op += vl);
  });

  return op - d;
}

console.log(calculateDifference({ "baseball bat": 20 }, 5));

// ➞ 15
console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
//➞ 11

console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

//➞ 1
