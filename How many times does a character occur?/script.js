function myFunction(a, b) {
  let count = 0;

  for (let i = 0; i < b.length; i++) {
    if (b[i] === a) {
      count++;
    }
  }
  console.log(count);
}

myFunction("m", "how many times does the character occur in this sentence?");
// Expected;
// 2;
myFunction("h", "how many times does the character occur in this sentence?");
// Expected;
// 4;
myFunction("?", "how many times does the character occur in this sentence?");
// Expected;
// 1;
myFunction("z", "how many times does the character occur in this sentence?");
// Expected;
// 0;
