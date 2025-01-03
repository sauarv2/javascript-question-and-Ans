function myFunction(a) {
  console.log(a.slice(0, 3));
}

myFunction("abcdefg");
// Expected
// 'abc'
myFunction("1234");
// Expected
// '123'
myFunction("fgedcba");
// Expected
// 'fge'
