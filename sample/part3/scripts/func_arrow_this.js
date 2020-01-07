let Counter = function() {
  this.count = 0;
  setInterval(() => this.count++, 1000);
};
let c = new Counter();
// c.setInterval();
console.log(c.count);