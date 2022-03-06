const fs = require('fs')

const base_path = '../../content/subfolder'
const first = fs.readFileSync(base_path + '/first.txt', 'utf-8')
const write_second = fs.writeFileSync(base_path + '/second(2).txt', first)

console.log(first);
console.log(write_second);