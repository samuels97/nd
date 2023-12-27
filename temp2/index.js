const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.send("Hello world");
});

app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/public/form.html');
});


app.post('/submit-form', (req, res) => {
  const formData = req.body;
  console.log(formData); // Log the form data for testing

  // Process the form data and respond accordingly
  res.send('Form submitted successfully!');
});


app.listen(5000);
