/*
find next higher natural number that is divisble by y

Write

a function that takes two numbers, say x and y, as arguments. Check if x

is divisible by y. If yes, return x. If not, return the next higher

natural number that is divisible by y in js */

function findNextDivisible(x, y) {
  if (x % y === 0) {
    return x;
  }
}
function isNatural(a, b) {
  if (findNextDivisible(a, b)) {
    return a;
  } else {
    let x = a + 1;

    let check = (x, b) => {
      if (x % b === 0) {
        return x;
      }
    };
    while (!check(x, b)) {
      x++;
    }
    return x;
  }
}

console.log(isNatural(10, 5)); // Output: 10
console.log(isNatural(11, 5)); // Output: 15
console.log(isNatural(7, 3)); // Output: 9
console.log(isNatural(1, 7)); // Output: 7
console.log(findNextDivisible(0, 5)); // Output: 0
console.log(findNextDivisible(17, 17)); //Output 17
