function convertToDecimal(arr) {
  for (let o of arr) [console.log(o.replace("%", "") / 100)];
}

convertToDecimal(["1%", "2%", "3%"]); // ➞ [0.01, 0.02, 0.03]
