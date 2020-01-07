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
async function serial(value) {
  let result = await hoge(value);
  result = await hoge(result);
  result = await hoge(result);
  console.log('処理が終了しました');
  return result;
}
serial('佐藤理央')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(`Error. ${error.message}`);
  });
console.log('...他の処理...');
