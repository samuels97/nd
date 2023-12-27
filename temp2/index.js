const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.send("Hello world");
});

app.post('/submit-form', (req, res) => {
  const formData = req.body; // Access form data here
  // Process the form data and respond accordingly
});


app.listen(5000);
