let mail = '問い合わせは<a href="mailto:hoge@example.com">hoge@example.com</a>から';
let re = /<a href="mailto:(?<mail>.+?)">\k<mail><\/a>/;
console.log(mail.match(re)[0]);