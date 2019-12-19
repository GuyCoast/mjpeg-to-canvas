const  {JSDOM}  = require('jsdom');

const dom = new JSDOM('<body></body>');

const canvas = dom.window.document.createElement('canvas');
const ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, 1, 1);
