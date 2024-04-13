// Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string

function charCount(a, b) {
  let count = 0;

  for (let i = 0; i < b.length; i++) {
    if (b[i] === a) {
      count++;
    }
  }
  return count;
}
console.log(charCount("a", "edabit"));
// ➞ 1
console.log(charCount("c", "Chamber of secrets"));
// ➞ 1
console.log(charCount("b", "big fat bubble"));
// ➞ 4
