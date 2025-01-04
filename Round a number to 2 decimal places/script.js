// Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number
function myFunction(a) {
  let rounded = Number(a.toFixed(2));

  console.log(rounded);
}

myFunction(2.12397);
// Expected
// 2.12
myFunction(3.136);
// Expected
// 3.14
myFunction(1.12397);
// Expected
// 1.12
myFunction(26.1379);
// Expected
// 26.14
