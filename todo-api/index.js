const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

const users = [
    {
        name: 'Sam',
        id: 'Sam',
    },
    {
        name: 'Ram',
        id: 'Ram',
    }
]

app.get('/',(req,res) => {
    res.status(200);
    res.send({
        message: "Welcome to express!!"
    })
})

app.get('/loadusers',(req,res) => {
    res.status(200);
    res.send({
        message: 'available alable users',
        data: users
    })
})

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
})