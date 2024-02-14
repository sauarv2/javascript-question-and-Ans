function largestSwap(num){

      // Convert number to string to access individual digits

    const toString = num.toString();

    // Extract tens and ones digits

    let fristNum = parseInt(toString[0])
    let secondNum = parseInt(toString[1])

 // Swap digits and convert back to number
  const toNumber = secondNum *10 + fristNum;

 // Compare original and swapped numbers
  return   num>= toNumber;


}



console.log(largestSwap(27));  // False
console.log(largestSwap(43));  // True
console.log(largestSwap(14));  // False
console.log(largestSwap(53));  // True
console.log(largestSwap(99));  // True