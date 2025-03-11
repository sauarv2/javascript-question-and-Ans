// /[^a-zA-Z0-9]/g

const checkEmail = function (str) {
  const regex = /[^\w]/gi;
  const check = str.match(regex);
  console.log(check);
};

checkEmail("alice15@gmail.com"); //➞ ["@", "."]
