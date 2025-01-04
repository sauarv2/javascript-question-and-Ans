function myFunction(a) {
  console.log(a % 1 === 0);
}

myFunction(4);
// Expected
// true
myFunction(1.123);
// Expected
// false
myFunction(1048);
// Expected
// true
myFunction(10.48);
// Expected
// false
