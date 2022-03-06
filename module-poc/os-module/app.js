const os = require('os')

const user = os.userInfo()
const system_uptime = os.uptime()
const current_os = {
    name: os.type(),
    release: os.release(),
    total_mem: os.totalmem(),
    free_mem: os.freemem()
}

console.log(system_uptime);
console.log(current_os);