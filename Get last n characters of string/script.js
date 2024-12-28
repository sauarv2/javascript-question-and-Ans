function myFunction(a) {
  console.log(a.slice(-3));
}

myFunction("abcdefg");
// Expected
// 'defg'
myFunction("1234");
// Expected
// '4'
myFunction("fgedcba");
// Expected
// 'dcba'
