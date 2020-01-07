let data = ['あいう,かきく', 'さしす,たちつ,なにぬ', 'はひふ'];
console.log(data.flatMap(function(value) {
  return value.split(',');
}));

console.log(data.map(function(value) {
  return value.split(',');
}));