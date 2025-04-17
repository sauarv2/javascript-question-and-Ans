function amplify(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i % 4 === 0) {
      result.push(i * 10);
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(amplify(4)); // [1, 2, 3, 40]
console.log(amplify(3)); // [1, 2, 3]
console.log(amplify(25)); // [1, 2, 3, 40, 5, 6, 7, 80, ..., 240, 25]
