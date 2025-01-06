function myFunction(a) {
  let aa = a + "";
  let jp = aa.split("");

  console.log(jp.map(Number));
  //   covert to a number
}

myFunction(10);
// Expected
// [1,0]
myFunction(931);
// Expected
// [9,3,1]
myFunction(193278);
// Expected
// [1,9,3,2,7,8]
