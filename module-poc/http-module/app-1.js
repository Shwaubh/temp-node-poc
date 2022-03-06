const http = require('http')

const server = http.createServer((req, resp) => {
    if(req.url === '/'){
        resp.write('<b> Welcome to our Homepage </b>')
    }
    if(req.url === '/about'){
        resp.write('Here is our short history')
    }
    resp.write(`
    <h1> Oops! 404 </h1>
    <a href='/'>Home</a>
    `)
    resp.end()
})

server.listen(5000)