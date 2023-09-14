const path = require("path");

console.log(path);

const filePath = path.join('/content', 'subfolder', 'textfile.text');

console.log(filePath);

const base = path.basename(filePath);

console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfoler', 'textfile.txt');

console.log(absolute);