/*

Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§Data 1: [5, 2, 4, 1, 15, 8, 3]
§Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

const Data1 = [5, 2, 4, 1, 15, 8, 3];
const Data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (data) => {
  const avg = data
    .map((Dage) => (Dage <= 2 ? 2 * Dage : 16 + Dage * 4))
    .filter((Dage) => Dage >= 18)
    .reduce((acc, Dage, i, arr) => acc + Dage / arr.length, 0);

  return avg;
};

console.log(calcAverageHumanAge(Data2));
console.log(calcAverageHumanAge(Data1));
