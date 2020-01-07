let data = { hoge: 'ほげ', foo: { piyo : 'ぴよ' , goo: 'ぐぅ' }};
let { hoge, foo, foo: {piyo, goo} } = data;
console.log(hoge);
console.log(foo);
console.log(piyo);
console.log(goo);