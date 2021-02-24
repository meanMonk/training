const http = require('http')

const server = http.createServer((req,res) => {
    res.writeHead(200);
    res.end('I am alive')
    switch(req.url) {
        case "/":
        ////
        case " /user":
        ////
        case " /createPost":
        ////
    }
})

server.listen(process.env.PORT || 3000,() => {
    console.log(`listening on ${process.env.PORT || 3000}`)
})