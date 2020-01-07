class Person {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  // ageプロパティのgetter／setter
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value
  }
  show() {
    return `${this.name}は${this.sex}、${this.age}歳です。`;
  }
}
let p = new Person('理央', '女');
p.age = 10;
console.log(p.show());