// sum of array----------------

const ar = [1, 2, 3, 4, 5, 6];

let ini = 0;

function sumOF(arry) {
  arry.forEach((arr) => {
    ini += arr;
  });

  return ini;
}

console.log(sumOF(ar));
