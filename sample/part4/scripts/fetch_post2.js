let data = new URLSearchParams();
data.set('format', 'Y年m月d日 H:i:s');
fetch('fetch_post.php?' + data.toString(), {
  method: 'POST',
  body: data,
})
  .then(response => response.text())
  .then(text => console.log(text));
  