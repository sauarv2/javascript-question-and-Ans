function myFunction(a, n) {
  console.log(a[n - 1]);
}

myFunction("abcd", 1);
// Expected
// 'a'
myFunction("zyxbwpl", 5);
// Expected
// 'w'
myFunction("gfedcba", 3);
// Expected: 'e'
