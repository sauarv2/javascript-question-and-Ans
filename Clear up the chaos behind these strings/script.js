/*
It seems like something happened to these strings. Can you figure out how to clear up the chaos?
Write a function that joins these strings together such that they form the following words:
'Javascript', 'Countryside', and 'Downtown'.
You might want to apply basic JS string methods such as replace(), split(), slice() etc.
*/

function reconstructStrings(parts) {
  const words = [];

  // Reconstruct "Javascript"
  const javascriptParts = parts.javascript;
  //   console.log(javascriptParts);
  let javascript = "";
  for (const part of javascriptParts) {
    javascript += part;
  }
  words.push(javascript);

  // Reconstruct "Countryside"
  const countrysideParts = parts.countryside;
  let countryside = "";
  for (const part of countrysideParts) {
    countryside += part;
  }
  words.push(countryside);

  // Reconstruct "Downtown"
  const downtownParts = parts.downtown;
  let downtown = "";
  for (const part of downtownParts) {
    downtown += part;
  }
  words.push(downtown);

  console.log(words);
}

// Example usage:
const stringParts = {
  javascript: ["java", "script"],
  countryside: ["coun", "try", "side"],
  downtown: ["down", "town"],
};

const reconstructed = reconstructStrings(stringParts);
console.log(reconstructed); // Output: ["javascript", "countryside", "downtown"]

const stringParts2 = {
  javascript: ["Ja", "vas", "cr", "ipt"],
  countryside: ["Cou", "ntr", "y", "si", "de"],
  downtown: ["Do", "wnt", "own"],
};

const reconstructed2 = reconstructStrings(stringParts2);
console.log(reconstructed2); // Output: ["Javascript", "Countryside", "Downtown"]

// More robust example with potential extra whitespace or capitalization issues
const stringParts3 = {
  javascript: [" jaVa ", "ScrIPT"],
  countryside: [" counTRY ", " Side "],
  downtown: ["DOWN", " town "],
};

function reconstructStringsRobust(parts) {
  const words = [];

  for (const word in parts) {
    let reconstructedWord = "";
    for (const part of parts[word]) {
      reconstructedWord += part.trim().toLowerCase(); // Trim whitespace and lowercase
    }
    //Capitalize the first letter
    reconstructedWord =
      reconstructedWord.charAt(0).toUpperCase() + reconstructedWord.slice(1);
    words.push(reconstructedWord);
  }

  return words;
}

const reconstructed3 = reconstructStringsRobust(stringParts3);
console.log(reconstructed3); // Output: ["Javascript", "Countryside", "Downtown"]
