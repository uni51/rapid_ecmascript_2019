class Person {
  constructor(firstName, lastName, sex) {
    Object.assign(this, {firstName, lastName, sex });
  }
  show() {
    return `${this.lastName}${this.firstName}は${this.sex}です。`;
  }
}
let p = new Person('理央', '佐藤', '女');
console.log(p.show());