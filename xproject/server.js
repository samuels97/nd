const express = require('express');
const data = require('./data.json');

const app = express();
app.use(express.static('static'));

app.get('/home', (req, res)=>{
    const newdata = data.map((datta)=>{
        const {name, road} = datta
        return {name}
    });
    res.json(newdata);
});

app.listen(3002, function(){
    console.log('App started on port 3000');
});
