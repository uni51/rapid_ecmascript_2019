class MyClazz {
  constructor(data) {
    this.data = data;
  }
  *[Symbol.iterator]() {
    let current = 0;
    while(current < this.data.length) {
      yield this.data[current++];
    }
  }
}

let c = new MyClazz(['ほげ', 'ふー', 'ぴよ']);
for(let d of c) {
  console.log(d);
}