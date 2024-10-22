/*

Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§Data 1: [5, 2, 4, 1, 15, 8, 3]
§Data 2: [16, 6, 10, 5, 6, 1, 4]


*/

const dogAge = function (ages) {
  const Dogages = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(Dogages);
  const chack18 = Dogages.filter((ages) => ages >= 18);
  // console.log(Dogages);
  // console.log(chack18);
  const avgDog = chack18.reduce(
    (acc, curr, i, arr) => acc + curr / arr.length,
    0
  );
  // console.log(avgDog);
};

let age1 = [5, 2, 4, 1, 15, 8, 3];
let age2 = [16, 6, 10, 5, 6, 1, 4];

dogAge(age1);
dogAge(age2);

/*


Mapping Human Ages to Dog Ages:

const Dogages = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
This line uses the map method to create a new array Dogages.
For each element in the ages array:
If the age is less than or equal to 2, it is multiplied by 2.
Otherwise, the formula 16 + age * 4 is used.
Filtering Dog Ages:

const chack18 = Dogages.filter((age) => age >= 18);
This line uses the filter method to create a new array chack18.
It includes only the dog ages that are 18 or older.
Logging the Arrays:

console.log(Dogages);: Logs the array of all dog ages.
console.log(chack18);: Logs the array of dog ages that are 18 or older.
Calculating the Average Dog Age:

const avgDog = chack18.reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
This line uses the reduce method to calculate the average of the filtered dog ages.
reduce takes a callback function and an initial value (0 in this case).
The callback function adds each current value (curr) divided by the length of the array (arr.length) to the accumulator (acc).
The result is the sum of all dog ages divided by the number of elements, giving the average.
*/
