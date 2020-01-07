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
hoge('佐藤理央')
  .then(
    response => {
      console.log(response);
    }
  )
  .catch(
    error => {
      console.log(`Error. ${error.message}`);
    }
  )
  // .then(
  //   response => {
  //     console.log(response);
  //   },
  //   error => {
  //     console.log(`Error. ${error.message}`);
  //   }
  // )
  .finally(
    () => {
      console.log('終了');
    }
  );
