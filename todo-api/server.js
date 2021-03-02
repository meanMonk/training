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
const userRouteModule = require('./routes/user.route');
const app = express();
const cors = require('cors');
const path = require('path')
const morgan = require('morgan');

app.use(express.json());

app.use(cors());

app.use(morgan('tiny'))

// app.use(express.static(path.join(__dirname,'public/todo-ui')))


const port = process.env.PORT || 8080;

app.get('/',(req,res) => {
    res.status(200);
    res.send("I am alive!")
})

app.get('/health',(req,res) => {
    res.status(200).send('I am alive!')
})

app.use('/api',resourceRouteModule())
app.use('/api',userRouteModule())


// No route found
app.use((req,res,next) => {
    console.log('No Route FOUND===')
    res.status(404).send({
        message: 'No route found!'
    })
})

//// Eror handling ///
app.use((err,req,res,next) => {
    res.status(500).send({
        message: "Internal server!"
    })
})


app.listen(port,() => {
    console.log(`App listening on.... ${port}`)
})









