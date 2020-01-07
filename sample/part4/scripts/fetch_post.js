let data = new FormData();
data.append('format', 'Y年m月d日 H:i:s');
fetch('fetch_post.php', {
  method: 'POST',
  body: data,
})
  .then(response => response.text())
  .then(text => console.log(text));
  