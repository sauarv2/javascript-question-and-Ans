function myFunction(a) {
  let p = a.lastIndexOf(3);
  console.log(a.slice(0, -3));
}

myFunction("abcdefg");
// Expected
// 'abcd'
myFunction("1234");
// Expected
// '1'
myFunction("fgedcba");
// Expected
// 'fged'
