function* myGenerator() {
  yield 'あ';
  yield 'い';
  yield 'う';
}
for(let t of myGenerator()) {
  console.log(t);
}