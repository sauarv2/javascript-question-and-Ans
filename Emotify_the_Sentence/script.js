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
