/*
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog
🐶 number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
")
4. Run the function for both test datasets
Test data:
§Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
*/

// const julia = ;

// console.log(julia.slice(1, -2));

const checkDogs = (juliadogs, katedogs) => {
  const juliadogUpdate = juliadogs.slice(1, -2);
  //   Julia found out that the owners of the first and the last two dogs actually have
  // cats, not dogs!
  const dogs = juliadogUpdate.concat(katedogs);
  //   Create an array with both Julia's (corrected) and Kate's data

  //   console.log(dogs);

  // For each remaining dog, log to the console whether it's an adult ("Dog
  // 🐶 number 1
  // is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
  // ")

  dogs.forEach((dogs, i) => {
    if (dogs >= 5) {
      console.log(`dog number ${i + 1} is adult`);
    } else {
      console.log(` dog number ${i + 1} is puppy`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
