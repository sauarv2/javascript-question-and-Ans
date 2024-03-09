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


const claculateAge = (ages)=>
    
  ages.map(age=> age<=2 ? 2 * age :   16 +  age *  4).filter(hAge =>  hAge>18 ).reduce((acc,exdog,i,arr)=>
  acc + exdog/arr.length,0)  

  



  

const avg1 =claculateAge( [5,2,4,1,15,8,3]);
const avg2 = claculateAge([16,6,10,5,6,1,4]);

console.log(avg1,avg2);




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