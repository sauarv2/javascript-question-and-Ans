// using loop**************************
/*
function factorial(n) {
  let op = 1;
  for (let i = n; i > 0; i--) {
    op *= i;
  }
  console.log(op);
}

factorial(5); // 120
factorial(3); // 6
factorial(2); // 2
*/
// Recursive Approach:********************************
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
console.log(factorial(2)); // 2
