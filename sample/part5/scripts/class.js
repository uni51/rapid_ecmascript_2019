class Person {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  show() {
    return `${this.name}は${this.sex}です。`;
  }
}
let p = new Person('理央', '女');
console.log(p.show());