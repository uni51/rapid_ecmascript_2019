let data1 = [100, [200, 300], [400, 500]];
let data2 = [100, [200, [300, 400], [500]]];
console.log(data1.flat());
console.log(data2.flat());
console.log(data2.flat(2));
