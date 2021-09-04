const marked = require('marked');
const hljs = require('highlight.js');

module.exports = function (content) {
  marked.setOptions({
    highlight: function (code, language) {
      // Deprecated as of 10.7.0.highlight(lang, code, ...args) has been deprecated.
      // Deprecated as of 10.7.0.Please use highlight(code, options) instead.
      // https://github.com/highlightjs/highlight.js/issues/2277
      // return hljs.highlight(language, code).value; //旧的写法，不推荐了。如果遇到不标准的md语法会报错（比如代码块不选择language）
      // return hljs.highlight(code, { language: 'xml' }).value;
      return hljs.highlightAuto(code).value;
    }
  })

  const htmlContent = marked(content);
  const innerContent = "`" + htmlContent + "`";
  const moduleCode = `var code=${innerContent}; export default code;`
  return moduleCode;
}