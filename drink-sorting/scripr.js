// QUESTION*****************************************************************************

/*You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted:

drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]
The output of the sorted drinks object will be:

Examples
sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
*/
// function sortDrinkByPrice(drink){

// return drink.sort((drink[0].price ,drink[1].price) => {

// })

//   return drink[1].price

// }

function sortDrinkByPrice(drinks) {
  let compare = drinks.sort((a, b) => a.price - b.price);

  console.log(compare);
}

sortDrinkByPrice(
  (drinks = [
    { name: "lemonade", price: 50 },
    { name: "maga", price: 25 },
    { name: "carite", price: 1 },
    { name: "kolagol", price: 78 },
    { name: "tamisree", price: 42 },
    { name: "holudula", price: 85 },
    { name: "cocattula", price: 455 },
    { name: "tamli", price: 890 },
    { name: "sholaaa", price: 560 },
  ])
);
