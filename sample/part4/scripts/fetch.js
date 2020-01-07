let data = new URLSearchParams();
data.set('format', 'Y年m月d日 H:i:s');
fetch('fetch.php?' + data.toString())
  .then(response => {
  if(response.ok) {
    return response.text();
  } else {
    throw new Error('通信時にエラーが発生しました。');
  }
})
.then(text => console.log(text))
.catch((error) => console.log(error));
