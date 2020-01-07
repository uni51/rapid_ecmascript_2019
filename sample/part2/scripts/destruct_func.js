function destructure() {
  let result1 = 10;
  let result2 = 20;
  return [result1, result2];  
}
let [hoge, foo] = destructure();
console.log(hoge);
console.log(foo);