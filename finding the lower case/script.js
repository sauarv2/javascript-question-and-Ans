function detectWord(word) {
  let mt = word.match(/[a-z]/g);

  return mt.join("");
}

console.log(detectWord("UcUNFYGaFYFYGtNUH")); //➞ "cat"
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
//➞ "burglar"
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")); //➞ "embezzlement"
