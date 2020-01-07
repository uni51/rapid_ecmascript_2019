let obj = { title:'速習webpack', price: 454, author: '山田祥寛'};

// let obj = Object.create(Object.prototype, {
//   title: { value: '速習webpack', writable: true, configurable: true, enumerable: true },
//   price: { value: 454, writable: true, configurable: true, enumerable: true },
//   author: { value: '山田祥寛', writable: true, configurable: true, enumerable: true }
// });
console.log(Object.getOwnPropertyDescriptors(obj));
