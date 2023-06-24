const express = require('express');

const bodyParser = require('body-parser');

const axios = require('axios');

const app = express();

app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
    const event = req.body;

    events.push(event);
    //to send back events to post server
    axios.post('http://posts-clusterip-srv:4000/events', event).catch((err) =>{
        console.log(err.message);
    });

    //to send back event to comment server
    axios.post('http://comments-srv:5000/events', event).catch((err) => {
        console.log(err.message);
    });
     //to send  event to query  server
    axios.post('http://query-srv:7000/events', event).catch((err) => {
        console.log(err.message);
    });

     //to send back event to moderation server
    axios.post('http://moderation-srv:8000/events', event).catch((err) => {
        console.log(err.message);
    });



    res.send({status: 'ok'});
});
app.get('/events', (req, res) => {
    res.send(events);
})

app.listen(6000, ()=>{
    console.log('listing on port 6000!');
});