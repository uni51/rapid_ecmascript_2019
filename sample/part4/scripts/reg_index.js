let re = /WINGS/y;
console.log(re.flags);
console.log(re.test('WINGS'));
re.lastIndex = 2;
console.log(re.test('出版WINGS'));