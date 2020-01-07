// function show(name) {
// if (name === undefined) { name = '権兵衛'; }
//   console.log('私の名前は' + name + 'です！');
// }

function show(name = '権兵衛') {
  console.log('私の名前は' + name + 'です！');
}

show();
show('リオ');

function add(a, b = a) {
  return a + b; 
}
console.log(add(1, 4));
console.log(add(1));
function dateFormat(date = new Date()) {
  return date.toLocaleString();
}
console.log(dateFormat(new Date(2019, 11, 4, 0, 0, 0)));
console.log(dateFormat());