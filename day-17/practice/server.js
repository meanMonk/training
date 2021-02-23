const http = require('http')

const server = http.createServer((req,res) => {
    res.writeHead(200);
    res.end('I am alive')
})

server.listen(process.env.PORT || 3000,() => {
    console.log(`listening on ${process.env.PORT || 3000}`)
})