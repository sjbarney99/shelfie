const express = require('express');
const controller = require('./../server/controller.js')
const bodyparser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyparser.json());

massive(process.env.CONNECTION_STRING)
    .then((dbInstance) => {
        app.set('db', dbInstance)
        console.log(dbInstance)
    })
    .catch((err) => {
        console.log(`Whoopsy there seems to be an error, ${err}.`)
    })

app.get('/api/inventory', controller.getAll)
app.post('/api/product', controller.create)
app.delete('/api/product:id', controller.delete)

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})