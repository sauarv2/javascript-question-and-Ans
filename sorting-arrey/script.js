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

//  ******************************************************************************************************

//  javascript sorting method 

/*Here are some of the JavaScript sorting methods that can be used to sort an array in ascending order:
Array.sort().
The Array.sort() method sorts the elements of an array in place and returns the sorted array. The sort order is ascending by default.
const arr = [1, 5, 3, 2, 4];
arr.sort();
console.log(arr); // [1, 2, 3, 4, 5]
*/



const sortDrinkByPrice = function(drink){
     const sort =  drink.sort((a,b)=>
     a.price - b.price )

     console.log(sort);
}

drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ];

  sortDrinkByPrice(drinks)