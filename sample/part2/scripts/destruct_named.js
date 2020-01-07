function trapezoid({upper = 1, lower = 1, height = 1}) {
  return (upper + lower) * height / 2;
}
console.log(
  trapezoid({
  upper: 5,
  lower: 10,
  height: 2
  })
);