/* 

Regex Series: Even Number?

Write a regular expression that matches only an even number. Numbers will be presented as strings.
Examples

"2341" ➞ false

"132" ➞ true

"29" ➞ false

"5578" ➞ true

*********/

function myFunction(str) {
  let num = +str;
  let result = num % 2 === 0 ? true : false;

  console.log(result);
}

myFunction("2341"); // ➞ false

myFunction("132"); //➞  true

myFunction("29"); //➞  false

myFunction("5578"); //➞ true
