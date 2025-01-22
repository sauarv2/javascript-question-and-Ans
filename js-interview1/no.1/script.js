// No.1 ------------------
/*
// modfy the frist index value***************

let name=  "js";

 name[1] = "q"
 
//  name=> js
//  its not modified because string is because string is immutable 

let name=  "js";

 name = "q"

//  name => q

//  its not modified the string . it is modify the variable

---------------------**************-----------------------
*/

/*
// No.2***************************

let num = 1;
const sum = ++num + num++;
//  preincrement and post increment

// sum => 4

// -------------------------------------******************------------------------------
*/

/*
// No.3-----------------------------------------
console.log("2" + 1 + 1);
// result => 2111
console.log(1 + 1 + "2");
// result=>22
-----------------------***********-----------------------


// No.4--------------------------------
[a] = [1, 5, 6, 7];

console.log(a);

// result => 1
//  becouse of destructuring concept************************

// no4----------------------------------------

const yt = "master";
const it = "teacher";

const r = yt && it;

console.log(r);


// if you awant it true and false try this

const yt = "master";
const it = "teacher";

const r = !!(yt && it);

console.log(r);


// no5*****************************

const js = "AB";

if (0 === 1) {
  js = "CD";
}

console.log(js);  // result ->AB


// const arr = [];

// arr[10] = 10;

// console.log(arr[10].length); // 11

const arr = [];

arr[10] = 10;
arr[10] = 100;

arr.forEach((d) => console.log("hi"));

// result is =>> hi(2)
// ---------------------------------------
// if index is skipted javascript created a empty slot. not initialize indexes in  empty space.. 
// frach we need indexes





// no6---------------------------------------

var show  = 1;
console.log(show);

function show(){
    console.log("😅")
}

// output=>> is 1 1 
*/

// no7-----------------------------------------------

let arr = [4, 6, 8, 3, 8];

// access arrey in reverse order----------------
// 1st method----------------------------
// console.log(arr[arr.length - 1]);
// 2nd method-----------------------
console.log(arr.at(-1));
