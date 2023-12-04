const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

app.get('/hm', (req, res)=>{
    res.render('hm', {'name':'Samuel'});
});

app.listen(3000, ()=>{
    console.log("server is running on port 5000");
});
