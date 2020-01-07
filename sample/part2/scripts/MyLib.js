const SECRET = Symbol();

export class MyClazz {
  constructor(secret) {
    this.data1 = 1;
    this.data2 = 2;
    this[SECRET] = secret;
  }
  checkSecret(secret) {
    return this[SECRET] === secret;
  }
}

// モジュール内部では、定数SECRET経由でのアクセスが可能
// let c = new MyClazz(12345);
// console.log(c[SECRET]);