class MyClazz {
  constructor(data) {
    this.data = data;
  }
  [Symbol.iterator](){
    let current = 0;
    let that = this;
    return {
      next(){
        return current < that.data.length ?
          {value:that.data[current++], done:false} :
          {done: true};
      }
    };
  }
}
let c = new MyClazz(['ほげ', 'ふー', 'ぴよ']);
for(let d of c) {
  console.log(d);
}