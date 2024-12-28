function myFunction(a) {
  let len = a.length / 2;

  console.log(a.slice(0, len));
}

myFunction("abcdefgh");
// Expected
// 'abcd'
myFunction("1234");
// Expected
// '12'
myFunction("gedcba");
// Expected
// 'ged'
