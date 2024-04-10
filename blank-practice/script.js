// const movement = [200,450,-400,3000,-650,-130,70,1300];

// const eurtousd = 1.1;

// const movementRTousd = movement.map(mov=>
//     mov * eurtousd
// );
// // const movementRTousd = []
// // for(const mov of movement)

// // movementRTousd.push(mov* eurtousd);

// console.log(movementRTousd)

// const movementdis = movement.map((mov,i)=>
//     `number ${i+1}: You ${Math.abs(mov)} amount  ${mov>0 ? 'deposited' : 'withdraw' }`
// );

// console.log(movementdis);

/********************************************************************************************************************** */

// const namee =  ["Saurav saha", "Ananda prasad saha"];
// const op = namee.toString();

// const userId =  function(nam){
// nam.forEach(nam => {
//     const ip =
//     nam.toLowerCase().split(" ").map(n=>
//         n[0]).join("");
//         console.log(ip);
// });

// ->ss,aps ->>>>>>>>>>>>>>>>>>>> output

// }
// userId(namee)

/************************************************************************************** */

// const movement = [200,450,-400,3000,-650,-130,70,1300];

// // const  deposited = movement.filter(mov=>
// //     mov>0);

// //     console.log(deposited)
// const total  =  movement.reduce((acc,mov)=>
// acc + mov,0);

// console.log(total)

// const  test1 = [5,2,4,1,15,8,3]
// const  test2 = [16,6,10,5,6,1,4]

/*const claculateAge =  function(ages){
    
     const humanAge = ages.map(age=> age<=2 ? 2 * age :   16 +  age *  4);

//A ternary conditional expression that determines the calculated human age:


        const excludeDog = humanAge.filter(hAge =>  hAge>18 )

        // Uses the filter method on the humanAge array to create a new array containing only elements that meet the specified condition.

       console.log(humanAge);
       console.log(excludeDog);

         const avg =  excludeDog.reduce((acc,exdog)=>
         acc + exdog,0) / excludeDog.length
//Uses the reduce method on the excludeDog array to iterate through each element (exdog) and accumulate a single value (avg).

         console.log(avg)
  }

  claculateAge( [5,2,4,1,15,8,3])
  claculateAge([16,6,10,5,6,1,4])
  */

//  secound method ******************************

/*
const claculateAge = (ages)=>
    
  ages.map(age=> age<=2 ? 2 * age :   16 +  age *  4).filter(hAge =>  hAge>18 ).reduce((acc,exdog,i,arr)=>
  acc + exdog/arr.length,0)  

  



  

const avg1 =claculateAge( [5,2,4,1,15,8,3]);
const avg2 = claculateAge([16,6,10,5,6,1,4]);

console.log(avg1,avg2);



*/

/*
  const movement = [200,450,-400,3000,-650,-130,70,1300];
  const eurTousd = 1.1;
  const Deposite = function(movement){
const totalDeposite = 
  movement.filter(mov=> mov>0).map(mov=> mov* eurTousd).reduce((acc,mov)=> acc + mov , 0)
  console.log(totalDeposite);

  // interest***********
  const interest = 
  movement.filter(mov=> mov>0).map(depo=>( depo* 1.2)/100).filter(int=>int>=1.0).reduce((acc,mov)=> acc + mov , 0)
  console.log(interest);
}



Deposite(movement)

*/

/*

for(let i = 0 ;  i<10; i++){
  if(i===8){
    break;
  } else if(i==5){
    continue;
  }
  console.log(i)
}

// 1,2,3,4,6,7

*/

// property exis in javascript **********************************
/*
  const user = {
     name: "saurav",
     age:28,
     email:'sauravsaha024@gmail.com'
  }

  console.log('email' in user);
  */

//     ************ ANY THING DELET FROM ARREY ****************************
/*
const  name = ["saurav","dipa","bristi","naki","paromi"];

  let ch =  name.splice(4,1);

  console.log(ch);

  console.log(name)
  console.log(name.length)

*/
// ******************** some method **********
/*
const name = ["saurav", "dipa", "bristi", "naki", "paromi"];

const check = name.some((some) => some === "saurav");

console.log(check);
*/

// ****************** flat method **********
/*
const n1 = [45, 86, -55, 66, 2, -99];
const n2 = [83, 86, 5, 96, 2, -99];
const n3 = [45, 86, -55, 6, 2, -99];
const n4 = [45, 86, -55, 66, 201, -99];

const all = [n1, n2, n3, n4];

const AllInOne = all
  .map((all) => all)
  .flat()
  .reduce((acc, all) => acc + all, 0);

console.log(AllInOne);
*/

/*
function potatoes(op) {
  const p = [];

  const i = op.split("potato").length - 1;

  return i;
}

console.log(potatoes("potato")); //➞ 1
console.log(potatoes("potatopotato")); //➞ 2
console.log(potatoes("potatoapple")); //1
//➞ 1

// ************************************************


// const str = "apple, cherries, green, apples, green, kiwi";

// const ip = str.split(",").filter((str) => str.includes("green")).length;

// console.log(ip);

/*************************************------------------------------------------------- */
/*
function numberSquares(n) {
  let op = 0;
  for (let i = 1; i <= n; i++) {
    op += i * i;
  }
  return op;
}

console.log(numberSquares(4));

//➞ 5
console.log(numberSquares(4));
//➞ 30

console.log(numberSquares(numberSquares(5)));

//➞ 55
*/

// **********************************************************************/
/*
function seriesResistance(n) {
  const op = n.reduce((total, num) => {
    return total + num;
  }, 0);

  return op + " ohms";
}
console.log(seriesResistance([1, 5, 6, 3]));
console.log(seriesResistance([16, 3.5, 6]));
console.log(seriesResistance([0.5, 0.5]));

//➞ "15 ohms"

seriesResistance([16, 3.5, 6]); //➞ "25.5 ohms"

seriesResistance([0.5, 0.5]); //➞ "1.0 ohm"

*/

function detectWord(word) {
  let mt = word.match(/[a-z]/g);

  return mt.join("");
}

console.log(detectWord("UcUNFYGaFYFYGtNUH")); //➞ "cat"
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));
//➞ "burglar"
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")); //➞ "embezzlement"
