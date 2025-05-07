const http = require('http');

const server = http.createServer((req, res) => {
    // res.writeHead(200,{'content-type':'text/html'}) // based on this tag the server will treat 
    // res.write('<h1>Home Page</h1>')                 // this line as html / text
    // res.end()  // Always necessary as without this the page won't load

    if (req.url === '/') {
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>Home Page</h1>')
        res.end()
    } else if (req.url === '/about') {
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    } else {
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1>Resource Not Found</h1>')
        res.end()
    }

})

server.listen(5123)