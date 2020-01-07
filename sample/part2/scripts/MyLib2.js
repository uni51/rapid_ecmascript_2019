const SEC_METHOD = Symbol();

export class MyClazz2 {
  [SEC_METHOD]() {
    return 'Private Value';
  }
  getSecret() {
    return `Public: ${this[SEC_METHOD]()}`;
  }
}