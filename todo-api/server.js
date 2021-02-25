/**
 * Refs:
 * https://expressjs.com/
 * https://www.npmjs.com/package/express
 *  - npm init > which creats your package json
 *  - install express>>> npm install express --save
 * 
 * https://sequelize.org/master/manual/getting-started.html
 * 
 * */


const express = require('express');
const resourceRouteModule = require('./routes/resource.route');
const app = express();

app.use(express.json());

const port = 8080;

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









