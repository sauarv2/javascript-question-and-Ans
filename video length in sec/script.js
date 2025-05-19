/*
You are given the length of a video in minutes.The format is mm: ss(e.g.: "02:54").Create a function that takes the video length and return it in seconds.
Examples

minutesToSeconds("01:00")// ➞ 60

minutesToSeconds("13:56")// ➞ 836

minutesToSeconds("10:60")// ➞ false


*/

function minutesToSeconds(data) {
  const toarr = data.split(":");

  const Tosec = Number(toarr[0] * 60) + Number(toarr[1]);
  // if sec number is more and equal to 60 so ********************************
  Number(toarr[1]) >= 60 ? console.log(false) : console.log(Tosec);
}

minutesToSeconds("01:00"); // ➞ 60

minutesToSeconds("13:56"); // ➞ 836

minutesToSeconds("10:60"); // ➞ false
