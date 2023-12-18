const React = require('react');
const unified = require('unified');
const markdown = require('remark-parse');
const remark2react = require('remark-react');
const content = unified()
  .use(markdown)
  .use(remark2react)
  .processSync(require('fs').readFileSync('public/posts/2.md')).contents;
const 2 = () => <>{content}</>;
export default 2;
