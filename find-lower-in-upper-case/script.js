/*QUESTION******************


What's Hiding Amongst the Crowd?
A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

The wanted word is in lowercase.
The crowd of letters is all in uppercase.
Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"

*/

function detectWord(words) {
  // find lower
  const lowwerfind = /[a-z]/g;

  const find = words.match(lowwerfind);

  //   return find;
  const tostring = find.join("");

  return tostring;
}

console.log(detectWord("UcUNFYGaFYFYGtNUH"));

// ➞ "cat"

console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));

//➞ "burglar"

console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));

//➞ "embezzlement"

// ********************************************* EXPLAIN ***************************
/*  Regular Expression Match:

The code defines a regular expression lowwerfind = /[a-z]/g that matches all lowercase letters ([a-z]) globally (g).
The match method is called on the input string words using this regular expression, returning an array of all matching lowercase letters.
Converting Matches to String:

The toString method is called on the array of matches (find), converting it into a comma-separated string of lowercase letters.
Removing Commas:

The replace method is called on the string obtained in step 2, replacing all commas (,) with empty strings. This effectively removes the commas, leaving only the concatenated lowercase letters.
Returning the Hidden Word:

The final string without commas, which is the hidden word, is returned by the function.
*/
