/*
Challenge: Return the next higher prime number

Write a function that takes a number (a) as argument. 
If a is prime, return a. If not, return the next higher prime number.
*/

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function nextPrime(a) {
  if (isPrime(a)) {
    return a;
  }

  let nextNum = a + 1;
  while (!isPrime(nextNum)) {
    nextNum++;
  }
  return nextNum;
}

// Test cases (include these in your question)
console.log(nextPrime(7)); // Expected: 7
console.log(nextPrime(8)); // Expected: 11
console.log(nextPrime(14)); // Expected: 17
console.log(nextPrime(23)); // Expected: 23
console.log(nextPrime(1)); // Expected: 2
console.log(nextPrime(0)); // Expected: 2
console.log(nextPrime(-5)); // Expected: 2

/*
  Question:
  
  Given the functions `isPrime(num)` and `nextPrime(a)` defined above, which of the following statements are true?
  
  A. `nextPrime(4)` returns 5.
  B. `nextPrime(11)` returns 13.
  C. `nextPrime(1)` returns 1.
  D. `nextPrime(9)` returns 11.
  E. `nextPrime(-2)` returns 2.
  
  Select all that apply.
  */

// Answer: A, D, E

/*
  Explanation of why the other options are wrong:
  
  B. `nextPrime(11)` returns 11 because 11 is already prime.
  C. `nextPrime(1)` returns 2, as 1 is not considered prime, and 2 is the next prime number.
  
  */
