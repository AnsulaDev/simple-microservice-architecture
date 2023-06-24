const express = require('express');
const  cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
    const {type, data} = req.body;
    if(type==='CommentCreated'){
        const status = data.content.includes('orange') ? 'rejected' : 'approved';

        await axios.post('http://event-bus-srv:6000/events', {
            type: 'CommentModerated',
            data:{
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        });
    }
    res.send({});
});

app.listen(8000, () => {
    console.log('running on port 8000');
});