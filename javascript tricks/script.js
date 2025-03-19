const movement = [
  1,
  5000,
  13,
  -45,
  1230,
  -8944,
  20000,
  6,
  56,
  -2300,
  80,
  ,
  -80000,
  90,
  972,
];
// **********************************************
// const check = movement
//   .flatMap((mov) => mov)
//   .reduce((mov, curr) => (curr >= 1000 ? mov + 1 : mov), 0);

// console.log(check);
/*
const { deposite, withdwal } = movement
  .flatMap((move) => move)
  .reduce(
    (mov, curr) => {
      curr >= 0 ? (mov.deposite += curr) : (mov.withdwal += curr);
      return mov;
    },

    { deposite: 0, withdwal: 0 }
  );
console.log(deposite, withdwal);


*/

// ************************************************************************
function convertTitleCase(title) {
  const cpitalize = (word) => word[0].toUpperCase() + word.slice(1);
  console.log(cpitalize);
  // frist word need to capitalize **************************** 👆

  const avoidspell = ["a", "an", "the", "but", "or", "on", "in", "is"];
  const toLower = title.toLowerCase();
  const toARR = toLower
    .split(" ")
    .map((word) => (avoidspell.includes(word) ? word : cpitalize(word))) //avoid rest word
    .join(" ");

  return cpitalize(toARR);
}

console.log(convertTitleCase("is this is a Nice title"));
console.log(convertTitleCase("this iS a long title but noT to long"));
console.log(convertTitleCase("Here is another tiTle with no exmaple"));
console.log(convertTitleCase("this is a bad title But not so bAd"));
console.log(convertTitleCase("Here is A Another title with example"));
