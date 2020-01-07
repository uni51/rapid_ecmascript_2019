class Person {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  show() {
    return `${this.name}は${this.sex}です。`;
  }
}
class BusinessPerson extends Person {
  constructor(name, sex, clazz) {
    super(name, sex);
    this.clazz = clazz;
  }
  show() {
    return `${super.show()} 役職は${this.clazz}です。`;
  }
}
let bp = new BusinessPerson('理央', '女', '主任');
console.log(bp.show());