/*

Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects 😉)
The Complete JavaScript Course
25Hints:
§
Use many different tools to solve these challenges, you can use the summary
lecture to choose between them 😉
§
Being within a range 10% above and below the recommended portion means:
current > (recommended * 0.90) && current < (recommended *
1.10). Basically, the current portion should be between 90% and 110% of the
recommended portion.
Test data:
const dogs = [
{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
{ weight: 8, curFood: 200, owners: ['Matilda'] },
{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },

*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 25, curFood: 313, owners: ["Seru", "Jonas"] },
  { weight: 20, curFood: 300, owners: ["kayli"] },
  { weight: 15, curFood: 213, owners: ["Sara"] },
  { weight: 35, curFood: 300, owners: ["Kyra", "Bob"] },
];

// for (const doggss of dogs) {
//   const weight = doggss.weight;
//   const recomandedFood = weight ** 0.75 * 28;
//   console.log(recomandedFood.toFixed(1));
// }
// add recomandedfood**************************
dogs.forEach((dog) => {
  dog.recFood = Math.floor(dog.weight ** 0.75 * 28);
});

// console.log(dogs);

// find sarah

const findperson = dogs.find((dog) => dog.owners.includes("Sarah"));

// chek*************
const currtntFood = findperson.curFood;
const recomandedFood = findperson.recFood;

// if (currtntFood > recomandedFood) {
//   console.log("eating to much");
// } else {
//   console.log("eating to little");
// }
const fristOwner = findperson.owners[0];
// console.log(
//   `${fristOwner} dogs eats ${
//     currtntFood > recomandedFood ? "too much" : "too little"
//   } `
// );

// find owner whose dog eating too much************
const findOwnerTO = dogs
  .map((dog) => dog)
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);

// console.log(findOwnerTO);

// find owner whose dog eating too much************
const findOwnerLI = dogs
  .map((dog) => dog)
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);

// console.log(findOwnerLI);

// 1st process************************

// findOwnerTO.forEach((arr) => console.log(`${arr} dogs eats too much `));
// findOwnerLI.forEach((arr) => console.log(`${arr} dogs eats too little `));

// 2nd processs*********************************

// console.log(`${findOwnerTO.join(",")} dogs eats too much `);
// console.log(`${findOwnerLI.join(",")} dogs eats too little `);

// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)****************************************************

const findRowner = dogs.some((dog) => dog.curFood === dog.recFood);

// console.log(findRowner);

// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
/*

LOGIC=======================================


const cur = 35;
let reco = 30;
if (reco + 5 >= cur && cur >= reco - 5) {
  console.log(true);
} else {
  console.log(false);
}

// console.log(5 >= 3 && 3 >= 0);

*/

// console.log(
//   dogs.every(
//     (dogs) =>
//       dogs.recFood + 50 >= dogs.curFood && dogs.curFood >= dogs.recFood - 50
//   )
// );

// Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)

const findDogarrey = dogs.filter(
  (dogs) =>
    dogs.recFood + 50 >= dogs.curFood && dogs.curFood >= dogs.recFood - 50
);

console.log(findDogarrey);
// dogs group by how much your dog eating food*********************
const grupDbyFood = Object.groupBy(dogs, (dog) => {
  if (dog.curFood > dog.recFood) {
    return `too-much`;
  } else if (dog.curFood < dog.recFood) {
    return `too-little`;
  } else {
    return `exact amount of food`;
  }
});

// console.log(grupDbyFood);

// grouped by number of owner **************************

const groupByOwner = Object.groupBy(dogs, (dog) => {
  return `${dog.owners.length} - owner`;
});

console.log(groupByOwner);


// sorting arrey ***************************
//  Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects 😉)



const sortedArrey =  dogs.toSorted((a,b)=> a.recfood - b.recfood)


console.log(sortedArrey)