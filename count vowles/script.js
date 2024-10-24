// find the vowels

// 1st mehod****************************
/*
function match(str) {
  return str.match(/[a,e,i,o,u]/gi)?.length || 0;
}

console.log(match("saurav saha"));
*/

// 2nd method**********************************
/*
function findVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}
  */

// 3rd method***********************************
function findVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  const findVowels = str.split("").filter((stri) => vowels.includes(stri));

  console.log(findVowels.length);
}

const name = "Saurav Saha";
const vowelCount = findVowels(name);
// console.log("Number of vowels in the name:", vowelCount);
