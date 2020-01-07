let obj = {};
let m = new Map();
m.set('hoge', 'ほげ');
m.set('foo', 'ふぅ');
m.set('piyo', 'ぴよ');
m.set(obj, 'オブジェクト');
for(let value of m.values()) {
  console.log(value);
}

for(let [key, value] of m) {
  console.log(`${key}:${value}`);
}