// find the vowels

function match(str) {
  return str.match(/[a,e,i,o,u]/gi)?.length || 0;
}

console.log(match("saurav saha"));
