let data = ['うめ', 'もも', 'さくら'];
Array.prototype.hoge = function() {};
for(let d in data) {
  console.log(d);
}