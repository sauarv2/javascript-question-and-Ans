// What is the purpose of the check function, and what will be the output of console.log(check("racecar"))? Explain how the function works to arrive at the output.

function check(str) {
  const reverseStr = str.split("").reverse().join("");

  return str === reverseStr;
}

console.log(check("racecar"));
