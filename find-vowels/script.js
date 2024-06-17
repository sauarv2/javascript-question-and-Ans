function countVowels(words) {
  const vowel = /[aeiou]/g;
  //    regular expression will match any word that contains the letters "a" and "e":
  // /[ae]/g
  let num = words.match(vowel);

  return num.length;
}

console.log(countVowels("Celebration"));

// ➞ 5

console.log(countVowels("Palm"));

//➞ 1

console.log(countVowels("Prediction"));
// ➞ 4

// *************************************************************
// 2nd process

function countVowels(str) {
  // Define a set of vowels
  const vowels = "aeiouAEIOU";
  let count = 0;

  // Loop through each character in the string
  for (let char of str) {
    // Check if the character is a vowel
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Example usage:
console.log(countVowels("Celebration")); // ➞ 5
console.log(countVowels("Palm")); // ➞ 1
console.log(countVowels("Prediction")); // ➞ 4

/**************************************************************
 * 3rd processs
 */

function countVowels(str) {
  // Define a set of vowels
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  // Use the reduce function to count vowels
  return [...str].reduce(
    (count, char) => (vowels.has(char) ? count + 1 : count),
    0
  );
}

// Example usage:
console.log(countVowels("Celebration")); // ➞ 5
console.log(countVowels("Palm")); // ➞ 1
console.log(countVowels("Prediction")); // ➞ 4

/************************************************
 * 4th process
 */

const countVowels = (str) =>
  str.split("").filter((char) => "aeiouAEIOU".includes(char)).length;

// Example usage:
console.log(countVowels("Celebration")); // ➞ 5
console.log(countVowels("Palm")); // ➞ 1
console.log(countVowels("Prediction")); // ➞ 4
