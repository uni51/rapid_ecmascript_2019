let re = /(?<area>0\d{1,4})-(?<city>\d{1,4})-(?<local>\d{3,4})/g;
let msg = '電話番号は012-345-6789です。';
console.log(msg.replace(re, '$<area>($<city>)$<local>'));
