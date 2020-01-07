let data = [1, 2, 3];
let formatted = data.map((value, index) => value * value);

// 従来の関数リテラルでの表記
// let formatted = data.map(function(value, index) {
//   return value * value;
// });

// 引数がひとつである場合、引数を括るカッコを省略可能
// let formatted = data.map(value => value * value);

// アロー関数で複数の文を持ちたい場合
// let formatted = data.map((value, index) => {
//   return value * value;
// });

console.log(formatted);

// let func = () => console.log('hoge');
// func();