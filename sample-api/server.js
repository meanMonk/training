const express = require('express');

const app = express();

app.use('/',(req,res,next) => {
    res.send({
        message: 'I am sample app, and alive tooo!'
    })
})

const port = 8080;
const host = '0.0.0.0';

app.listen(port,host,() => {
    console.log(`server runing on http://${host}:${port}`);
})