let book = {
  title: 'AngularJSアプリケーションプログラミング',
  price: 3700,
  toString() {
    console.log(`${this.title}:${this.price}円`);  
  }
};
book.toString();