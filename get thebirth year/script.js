// what does this function do when you input 1996;

function getYear(birhyear) {
  return new Date().getFullYear() - birhyear;
}

console.log(getYear(1996));
