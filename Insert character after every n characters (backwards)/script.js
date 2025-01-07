/*
function insertCharacterBackwards(a, b) {
  // Convert the string to an array to work with it more easily
  let result = [];
  let count = 0;

  // Loop through the string 'a' backwards
  for (let i = a.length - 1; i >= 0; i--) {
    result.unshift(a[i]); // Add the current character to the result
    count++;

    // After every 3 characters, insert 'b'
    if (count === 3 && i !== 0) {
      result.unshift(b);
      count = 0; // Reset the count
    }
  }

  return result.join(""); // Join the result array back into a string
}

// Example usage:
console.log(insertCharacterBackwards("abcdefgh", "-")); // Output: "abc-def-ghi"
*/

function insertCharacterBackwards(a, b) {
  let emptA = [];
  let count = 0;

  for (let i = 0; i <= a.length - 1; i++) {
    emptA.unshift(a[i]);
    count++;

    // return count;

    if (count === 3) {
      emptA.unshift(b);
    } else if (count === 6) {
      emptA.unshift(b);
    }
  }
  return emptA.reverse().join("");
}

console.log(insertCharacterBackwards("abcdefghi", "-")); // Output: "abc-def-ghi"
