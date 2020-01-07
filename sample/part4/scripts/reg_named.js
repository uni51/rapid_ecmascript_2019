let re = /(?<area>0\d{1,4})-(?<city>\d{1,4})-(?<local>\d{3,4})/;
let msg = '電話番号は012-345-6789です。';
let result = msg.match(re);
console.log(`市外局番：${result.groups.area}`);
console.log(`市内局番：${result.groups.city}`);
console.log(`加入者番号：${result.groups.local}`);