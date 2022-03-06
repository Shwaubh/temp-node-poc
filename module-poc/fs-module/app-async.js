const fs = require('fs')

const base_path = '../../content/subfolder'

fs.readFile(base_path + '/first.txt', 'UTF-8', (err, result) => {
    if(err)
    {
        console.log(err);
        return
    }
    else
    {
        console.log(result);
    }
})

console.log(base_path);
