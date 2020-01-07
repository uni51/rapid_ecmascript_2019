let array_data = [1, 2, 3];
let str_data = 'いろは';
let map_data = new Map();
map_data.set('JS', 'JavaScript');
map_data.set('PL', 'Perl');
map_data.set('PY', 'Python');
for(let tmp of array_data) {
  console.log(tmp);
}
for(let tmp of str_data) {
  console.log(tmp);
}
for(let [key, value] of map_data) {
  console.log(`${key}：${value}`);
}
let itr = array_data.values(); 
let c;
while(c = itr.next()) {
  if (c.done) { break; }
  console.log(c.done);
  console.log(c.value);
}