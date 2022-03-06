const path = require('path')

const file_path = path.join('../../content', 'subfolder', 'test.txt')
const base = path.basename(file_path)
const absolute = path.resolve(__dirname, '../../content', 'subfolder', 'test.txt')

console.log(path.sep);
console.log(path.join);
console.log(file_path);
console.log(base);
console.log(absolute);
console.log(__dirname);
