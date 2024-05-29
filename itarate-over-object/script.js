const personalDetail = {
  name: "alice",
  age: 23,
  occupation: "SDE 23",
};

// for in loop*************

// for (let key in personalDetail) {
//   console.log(personalDetail[key]);
// }

// object keys************************

Object.keys(personalDetail).forEach((key) => {
  console.log(personalDetail[key]);
});
