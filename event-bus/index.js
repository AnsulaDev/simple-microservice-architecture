const express = require('express');

const bodyParser = require('body-parser');

const axios = require('axios');

const app = express();

app.use(bodyParser.json());

app.post('/events', (req, res) => {
    const event = req.body;

    axios.post('http://localhost:4000/events', event).catch((err) =>{
        console.log(err);
    });
    axios.post('http://localhost:5000/events', event).catch((err) => {
        console.log(err);
    });
    axios.post('http://localhost:3000/events', event).catch((err) => {
        console.log(err);
    });


    res.send({status: 'ok'});
});

app.listen(6000, ()=>{
    console.log('listing on port 6000!');
});