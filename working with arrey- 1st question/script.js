function chekckdogs(juliaDog, kateDog) {
  const correctJulidogs = juliaDog;
  correctJulidogs.splice(0, 1);
  correctJulidogs.splice(-2);

  const dogsAge = correctJulidogs.concat(kateDog);
  console.log(dogsAge);
  dogsAge.forEach((Dogs, i) => {
    if (Dogs >= 3) {
      console.log(` ${i + 1} adult Dog ${Dogs}`);
    } else {
      console.log(` ${i + 1} Baby Dog ${Dogs}`);
    }
  });
}

chekckdogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/*

The code you provided defines a function called `chekckdogs` that takes two lists of dog ages, one for Julia and one for Kate, and then classifies each dog as an adult or baby dog. Here's a breakdown of how it works:

1. **Function Definition:**
   - The code defines a function named `chekckdogs` that takes two arguments, `juliaDog` and `kateDog`. These arguments are assumed to be lists containing integers representing the ages of Julia's dogs and Kate's dogs, respectively.

2. **Processing Julia's Dogs (Incorrect Approach):**
   - Inside the function, a new variable called `correctJulidogs` is declared and assigned the value of `juliaDog`. This creates a reference to the original list instead of creating a copy.
   - The code then tries to modify `correctJulidogs` using the `splice` method. However, `splice` is a JavaScript method that modifies the original array and doesn't work as intended here. It's intended for use with arrays and not lists.
   - The function attempts to remove the first and last elements from `correctJulidogs` using `splice(0, 1)` and `splice(-2)`, but this might not achieve the desired outcome due to the misuse of `splice`.

3. **Combining Dog Lists:**
   - Next, a new variable called `dogsAge` is created to hold the combined list of dog ages. It's created by concatenating the (potentially modified) `correctJulidogs` list with the `kateDog` list using the `concat` method. This creates a new list containing all the dog ages from both owners.

4. **Classifying Dogs by Age:**
   - The code iterates through the `dogsAge` list using a `forEach` loop. Inside the loop, it gets the current dog's age (`Dogs`) and its index in the list (`i`).
   - An if-else statement is used to classify the dog as an adult or baby dog based on its age. If the dog's age is greater than or equal to 3 (considered adult in this case), it logs a message indicating "Adult Dog" along with its age. Otherwise, it logs a message indicating "Baby Dog" along with its age.

5. **Sample Usage:**
   - The code includes a sample usage at the end where it calls the `check_dogs` function (notice the corrected name) with two example lists, one for Julia's dogs and another for Kate's dogs.

**Key Points:**

- The `splice` method is not used correctly in this code as it's intended for arrays, not lists. To create a copy of the list without modifying the original, methods like `slice` or spread operator (`...`) can be used.
- The function logic can be improved by creating a copy of Julia's dog list before modifying it.


I hope this explanation clarifies the code's functionality!
*/
