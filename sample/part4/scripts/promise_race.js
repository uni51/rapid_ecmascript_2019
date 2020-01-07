function hoge(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`x${value}x`);
      } else {
        reject(new Error('入力値が空です'));
      }
    }, 2000);
  })
}
Promise.race([
  hoge('佐藤理央'),
  hoge('腰掛奈美'),
  hoge('鈴木花子')
])
  .then(
    response => {
      console.log(response);
    }
  )
  .catch(
    error => {
      console.log(`Error. ${error.message}`);
    }
  );
