var Counter = function() {
  var _this = this;
  _this.count = 0;
  setInterval(function() {
    _this.count++;
  }, 1000);
};
var c = new Counter();
// c.setInterval();
console.log(c.count);
