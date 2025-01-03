function myFunction(a, b) {
  function myFunction(a, b) {
    if (a.includes(b)) {
      return b + a;
    } else {
      return a + b;
    }
  }

  // Test Cases:
  console.log(myFunction("cheese", "cake")); // Expected: 'cheesecake'
  console.log(myFunction("lips", "s")); // Expected: 'slips'
  console.log(myFunction("Java", "script")); // Expected: 'Javascript'
  console.log(myFunction(" think, therefore I am", "I")); // Expected: 'I think, therefore I am'
}

myFunction("cheese", "cake");
// Expected
// 'cheesecake'
myFunction("lips", "s");
// Expected
// 'slips'
myFunction("Java", "script");
// Expected
// 'Javascript'
myFunction(" think, therefore I am", "I");
// Expected
// 'I think, therefore I am'
