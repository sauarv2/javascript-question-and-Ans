/*
Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

word	emoticon
smile	:D
grin	:)
sad	:(
mad	:P

*/

function emotify(word) {
  let word1 = "smile";
  let word2 = "grin";
  let word3 = "sad";

  if (word.includes(word1)) {
    return `Make me 😄`;
  } else if (word.includes(word2)) {
    return `Make me☺ `;
  } else if (word.includes(word3)) {
    return `Make me😓 `;
  }
}

console.log(emotify("Make me smile"));

//➞ "Make me :D"
console.log(emotify("Make me grin")); //➞ "Make me :)"

console.log(emotify("Make me sad")); // ➞ "Make me :("

/****************************** */

function replaceWordsWithEmoticons(sentence) {
  // Define a dictionary of words and their corresponding emoticons
  const emoticonMap = {
    smile: ":D",
    grin: ":)",
    sad: ":(",
    mad: ":P",
  };

  // Split the sentence into words
  const words = sentence.split(" ");

  // Map each word to its corresponding emoticon if it exists in the dictionary
  const replacedWords = words.map((word) => {
    return emoticonMap[word] || word;
  });

  // Join the words back into a single string
  const resultSentence = replacedWords.join(" ");

  return resultSentence;
}

// Example usage
const sentence =
  "When you smile or grin , I feel happy. But when you are sad or mad , I feel bad.";
const result = replaceWordsWithEmoticons(sentence);
console.log(result);
// Output: "When you :D or :), I feel happy. But when you are :( or :P, I feel bad."
