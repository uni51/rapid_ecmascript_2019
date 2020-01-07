let obj = {};
let s = new Set(); 
s.add(5);
s.add(10);
s.add(8);
s.add(0);
s.add(8);
s.add(obj);

// let s = new Set([5, 10, 8, 0, 8, obj]);
console.log(s.size);
console.log(s.has(5));
console.log(s.has({}));
console.log(s.has(obj));
s.delete(5);
for(let value of s) {
  console.log(value);
}
s.clear();