const number = [7, 5, 6, 1, 3, 8, 9, 1, 2, 5, 6];

const reverse = number.reduce((accum, curr) => [curr, ...accum], []);

console.log(reverse);
