/*

Hashes and Pluses

Create a function that returns the number of hashes and pluses in a string.
Examples

hashPlusCount("###+") ➞ [3, 1]

hashPlusCount("##+++#") ➞ [3, 3]

hashPlusCount("#+++#+#++#") ➞ [4, 6]

hashPlusCount("") ➞ [0, 0]

Notes

    Return [0, 0] for an empty string.
    Return in the order of [hashes, pluses].
    */
const hashPlusCount = (data) => {
  let count1 = 0;
  let count2 = 0;
  let arr = [];

  for (let i = 0; i <= data.length; i++) {
    let findH = data[i];

    if ("#" === findH) {
      count1++;
    } else if ("+" === findH) {
      count2++;
    }
  }
  arr.push(count1, count2);
  console.log(arr);
};

hashPlusCount("###+"); // ➞ [3, 1]
hashPlusCount("##+++#"); //➞ [3, 3]

hashPlusCount("#+++#+#++#"); // ➞ [4, 6]

hashPlusCount(""); // ➞ [0, 0]
