/**
 * Refs:
 * https://expressjs.com/
 * https://www.npmjs.com/package/express
 *  - npm init > which creats your package json
 *  - install express>>> npm install express --save
 * */

const express = require('express');

const app = express();

app.use(express.json());

const port = 8080;

let resourceList = [
    {
        id: 0,
        name: 'apple'
    },
    {
        id: 1,
        name: 'microsoft'
    },
    {
        id: 2,
        name: 'xiomi'
    }
]

app.get('/',(req,res) => {
    res.status(200);
    res.send("I am alive!")
})

app.get('/resources',(req,res) => {
    res.status(200);
    res.send(resourceList);
})

/* to understand the reques api https://expressjs.com/en/4x/api.html#req.query */
app.get('/resources/:id',(req,res) => {
    const resource = resourceList.find((i) => i.id == req.params.id)
    let result;
    if(resource) {
        result = resource;
    } else {
        result = {message: 'No resource found!'}
    }

    res.status(200);
    res.send(result);
})
// to create new resource
app.post('/resource',(req,res) => {
    let newResource = {
        name: req.body.name,
        id: resourceList.length
    };
    resourceList.push(newResource)
    res.status(200);
    res.send(newResource)
})

// to update existin resource
app.put('/resources/:id',(req,res) => {
    let id = req.params.id;
    let name = req.body.name;
    resourceList = resourceList.map((item) => {
        if(item.id == id) {
            item.name = name;
        }
        return item;
    })
    res.status(200).send('Resource updated successfully!')
})

app.delete('/resources/:id',(req,res) => {
    let id = req.params.id;
    let index = resourceList.findIndex((i) => i.id == id);
    resourceList.splice(index,1)
    res.status(200).send('Resource removed successfully!')
});


app.listen(port,() => {
    console.log(`App listening on.... ${port}`)
})









