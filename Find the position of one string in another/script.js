function myFunction(a) {
  let c = "is";
  let index = a.indexOf(c);
  console.log(index);
}

myFunction("praise");
// Expected;
// 3;
myFunction("risky");
// Expected;
// 1;
myFunction("paris");
// Expected;
// 3;
