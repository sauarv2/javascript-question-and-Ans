function myFunction(a) {
  //   let spli = a.split("");
  //   spli.splice();
  let leny = a.length;

  console.log(a.slice(3, leny));
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
