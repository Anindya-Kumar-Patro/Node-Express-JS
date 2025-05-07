const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end("Homepage")
    }
    else if (req.url === '/about'){
        res.end("About Us")
    }
    else {
        res.end(`<h1>OOPS!!!<h1>`)
    }
})

server.listen(3000)