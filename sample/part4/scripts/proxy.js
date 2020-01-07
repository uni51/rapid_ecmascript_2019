let obj = { hoge: 'ほげ', foo: 'ふー' };
var p_obj = new Proxy(obj, {
  get(target, prop) { 
    return prop in target ?
      target[prop] : '？';
  }
});
console.log(p_obj.hoge);
console.log(p_obj.nothing);

p_obj.goo = 'ぐぅ';
console.log(obj.goo);
console.log(p_obj.goo);