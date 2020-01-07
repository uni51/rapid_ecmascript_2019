let data = { format: 'Y年m月d日 H:i:s' };
fetch('fetch_json.php', {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => response.text())
  .then(text => console.log(text));