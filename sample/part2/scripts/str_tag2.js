function _e(str) {
  if (!str) { return ''; }
  return str.replace(/[<>&"']/g, function(submatch) {
  const ESC = {
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&#39;'
  };
    return ESC[submatch];
    });
}
function escape(templates, ...values) {
  let result = '';
  for (let i = 0; i < templates.length; i++) {
    result += templates[i] + _e(values[i]);
  }
  return result;
}
let name = '<Tom & Jerry>';
console.log(escape`こんにちは、${name}さん！`);