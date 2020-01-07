function* countdown(begin) {
  while (begin >= 0) {
    yield begin--;
  }
}
for(let t of countdown(10)) {
  console.log(t);
}