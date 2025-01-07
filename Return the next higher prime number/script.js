/*
Challenge: Return the next higher prime number

Write a function that takes a number (a) as argument. 
If a is prime, return a. If not, return the next higher prime number.
*/

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  // for (let i = 5; i * i <= num; i += 6) {
  //   if (num % i === 0 || num % (i + 2) === 0) return false;
  // }
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
console.log(nextPrime(5)); // Expected: 5

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

/*
Let's break down the provided JavaScript code, which consists of two functions: `isPrime(num)` and `nextPrime(a)`.

**1. `isPrime(num)` Function:**

This function determines whether a given number `num` is prime. Here's a step-by-step explanation:

*   **Base Cases:**
    *   `if (num <= 1) return false;`: Numbers less than or equal to 1 are not prime.
    *   `if (num <= 3) return true;`: 2 and 3 are prime numbers.
*   **Divisibility by 2 or 3:**
    *   `if (num % 2 === 0 || num % 3 === 0) return false;`: If the number is divisible by 2 or 3, it's not prime (except for 2 and 3 themselves, which are handled by the base cases).
*   **Optimized Iteration:**
    *   `for (let i = 5; i * i <= num; i += 6)`: This is the core optimization. Instead of checking divisibility by every number up to `num`, it checks only numbers of the form `6k ± 1` (where k is any integer). This is because all prime numbers greater than 3 can be expressed in this form. The loop continues as long as `i * i` is less than or equal to `num`. This is because if a number `n` has a divisor greater than its square root, it must also have a divisor smaller than its square root.
    *   `if (num % i === 0 || num % (i + 2) === 0) return false;`: Inside the loop, it checks if `num` is divisible by `i` or `i + 2`. If it is, `num` is not prime.
*   **Return True:**
    *   `return true;`: If the loop completes without finding any divisors, the number is prime.

**Example:** Let's say `num` is 17.

1.  It passes the base cases (`num > 3`).
2.  It's not divisible by 2 or 3.
3.  The loop starts with `i = 5`.
4.  `5 * 5 <= 17` is true.
5.  `17 % 5 !== 0` and `17 % 7 !== 0`.
6.  `i` becomes 11.
7.  `11 * 11 <= 17` is false. The loop terminates.
8.  The function returns `true`.

**2. `nextPrime(a)` Function:**

This function finds the next prime number greater than or equal to the given number `a`.

*   **Check if `a` is prime:**
    *   `if (isPrime(a)) { return a; }`: If `a` is already prime, it returns `a`.
*   **Increment and Check:**
    *   `let nextNum = a + 1;`: Initializes `nextNum` to the number immediately following `a`.
    *   `while (!isPrime(nextNum)) { nextNum++; }`: This loop continues to increment `nextNum` until `isPrime(nextNum)` returns `true`, meaning it has found the next prime number.
*   **Return Next Prime:**
    *   `return nextNum;`: Returns the found prime number.

**Example:** Let's say `a` is 10.

1.  `isPrime(10)` returns `false`.
2.  `nextNum` is initialized to 11.
3.  `isPrime(11)` returns `true`.
4.  The function returns 11.

**In Summary:**

The code provides an efficient way to check for prime numbers and find the next prime number. The `isPrime` function uses an optimization based on the form `6k ± 1` to reduce the number of divisibility checks, making it more performant than checking divisibility by every number up to the square root of the input. The `nextPrime` function utilizes the `isPrime` function to find the subsequent prime number.


  */
