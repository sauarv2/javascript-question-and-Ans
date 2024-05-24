function chekckdogs(juliaDog, kateDog) {
  const correctJulidogs = juliaDog;
  correctJulidogs.splice(0, 1);
  correctJulidogs.splice(-2);

  const dogsAge = correctJulidogs.concat(kateDog);

  dogsAge.forEach((Dogs, i) => {
    if (Dogs >= 3) {
      console.log(` ${i + 1} adult Dog ${Dogs}`);
    } else {
      console.log(` ${i + 1} Baby Dog ${Dogs}`);
    }
  });
}

chekckdogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
