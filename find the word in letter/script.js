const str = "To be, or not to be, that is the question.";
let count = 0;
let position = str.indexOf("e");

// while (position !== -1) {
//   count++;
//   position = str.indexOf("e", position + 1);
// }
for (count; position !== -1; count++) {
  position = str.indexOf("e", position + 1);
}
console.log(count); // 4
