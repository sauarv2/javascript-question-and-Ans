/*
Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
Examples

reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"

reverseCase("MANY THANKS") ➞ "many thanks"

reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"

"
*/
/*
function reverseCase(str) {
  const earr = [];
  for (let i = 0; i <= str.length; i++) {
    let le = str[i].toUpperCase();

    if (str[i] === str[i].toUpperCase()) {
      earr.push(str[i].toLowerCase());
    } else if (str[i] === str[i].toLowerCase()) {
      earr.push(str[i].toUpperCase());
    }
    // console.log(earr.join(""));
    console.log(earr);
  }
}\*/

function reverseCase(s) {
  let reversedStr = [];
  for (let char of s) {
    if (char === char.toUpperCase()) {
      reversedStr.push(char.toLowerCase());
    } else if (char === char.toLowerCase()) {
      reversedStr.push(char.toUpperCase());
    } else {
      reversedStr.push(char);
    }
  }
  console.log(reversedStr.join(""));
}

//
// console.log(reverseCase("Happy Birthday")); // ➞ "hAPPY bIRTHDAY")

reverseCase("MANY THANKS"); //➞ "many thanks"

reverseCase("sPoNtAnEoUs"); //➞ "SpOnTaNeOuS"
