function numberSquares(n) {
  let totalSquares = 0;
  for (let i = 1; i <= n; i++) {
    totalSquares += i * i;
  }
  return totalSquares;
}

// Test cases
console.log(numberSquares(2)); // ➞ 5
console.log(numberSquares(4)); // ➞ 30
console.log(numberSquares(5)); // ➞ 55
