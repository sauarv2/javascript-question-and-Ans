/*
Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

    Must only contain numbers (no non-digits allowed).
    Must not contain any spaces.
    Must not be greater than 5 digits in length.
*/

function isValid(zip) {
  if (zip.length !== 5) return false;
  for (let char of zip) {
    if (char < "0" || char > "9") return false;
  }
  return true;
}

console.log(isValid("853a7"));
isValid("59001"); //➞ true

isValid("853a7"); //➞ false

isValid("732 32"); //➞ false

isValid("393939"); // ➞ false

// 2nd processs ************************

/*
function isValid(zip) {
    // Check if the string has exactly 5 characters, all digits, and no spaces
    return /^\d{5}$/.test(zip);
}

Explanation:

The function uses a regular expression to validate the zip code:

    ^ asserts the position at the start of the string

    \d matches any digit (0-9)

    {5} specifies exactly 5 occurrences of the preceding token (digits in this case)

    $ asserts the position at the end of the string

    */
