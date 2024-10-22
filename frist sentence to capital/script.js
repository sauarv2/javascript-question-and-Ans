const sentence = "mirzapur season three kese laga";

function lettertoupper(str) {
  let tolow = str.toLowerCase().split("");

  const titleCasedWords = tolow.foreach((word) => {
    return word.charAt(0).toUpperCase();
    // + word.slice(1);
  });
  return titleCasedWords;
}
console.log(lettertoupper(sentence));
