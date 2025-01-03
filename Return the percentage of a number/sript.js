function myFunction(totalValue, partialValue) {
  console.log((partialValue * totalValue) / 100);
}

myFunction(100, 50);
// Expected
// 50
myFunction(10, 1);
// Expected
// 0.1
myFunction(500, 25);
// Expected
// 125
