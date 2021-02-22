const http = require('http');

const requestListener = function (req,res) {
    res.writeHead(401);
    res.end('I am alive!');
}

/**
 * CRUD : Create | read | update | delete
 * get submitted forms    /loadSalesRequest
 * post create new form   /createRequest
 * put edit exisitng form /updateRequest
 * delete existing  /removeRequest
 */


const server = http.createServer(requestListener);

server.listen(3000,() => {
    console.log('listening on port',3000);
})
