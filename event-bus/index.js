const express = require('express');

const bodyParser = require('body-parser');

const axios = require('axios');

const app = express();

app.use(bodyParser.json());

app.post('/events', (req, res) => {
    const event = req.body;
    ///to send back events to post server
    axios.post('http://localhost:4000/events', event).catch((err) =>{
        console.log(err.message);
    });

    ////to send back event to comment server
    axios.post('http://localhost:5000/events', event).catch((err) => {
        console.log(err.message);
    });
    axios.post('http://localhost:7000/events', event).catch((err) => {
        console.log(err.message);
    });


    res.send({status: 'ok'});
});

app.listen(6000, ()=>{
    console.log('listing on port 6000!');
});