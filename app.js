const _ = require("lodash")

const items = [1, [2, [3, 4]]]
const new_items = _.flattenDeep(items)

console.log('I am the starting point of this application');

console.log('I am the old item', items)
console.log('I am the new item', new_items);

console.log('I am the ending point of this application');