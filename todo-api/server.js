/**
 * Refs:
 * https://expressjs.com/
 * https://www.npmjs.com/package/express
 *  - npm init > which creats your package json
 *  - install express>>> npm install express --save
 * */

const express = require('express');
const resourceRouteModule = require('./routes/resource.route');
const app = express();

app.use(express.json());

const port = 8080;

let logger = (req,res,next) => {
    let url = `http://${req.host}:${port}${req.originalUrl}`
    console.log({url,date: new Date(),ip: req.ip});
    next();
}

app.use(logger);

app.get('/',(req,res) => {
    res.status(200);
    res.send("I am alive!")
})

app.get('/health',(req,res) => {
    res.status(200).send('I am alive!')
})

app.use('/api',resourceRouteModule())

app.listen(port,() => {
    console.log(`App listening on.... ${port}`)
})









