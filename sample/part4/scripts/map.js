let obj = {};
let m = new Map();
m.set('hoge', 'ほげ');
m.set('foo', 'ふぅ');
m.set('piyo', 'ぴよ');
m.set(obj, 'オブジェクト');

// let m = new Map([['hoge', 'ほげ'], ['foo', 'ふぅ'], ['piyo', 'ぴよ'], [obj, 'オブジェクト']]);

console.log(m.get('hoge'));
console.log(m.get(obj));
console.log(m.get({}));
console.log(m.has('hoge'));
for(let key of m.keys()) {
  console.log(key);
}
for(let value of m.values()) {
  console.log(value);
}
for(let [key, value] of m) {
  console.log(`${key}:${value}`);
}
m.forEach((value, key) => console.log(`${key}=${value}`));
m.delete('hoge');
m.clear();