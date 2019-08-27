//Import express module
const express = require('express');

//Create express instance. Equivalent of saying 'new express()'
const app = express();

app.get('/' ,(req,res) => res.send('API is running'));

//server will look for environment variable named "PORT". If not found port 5000 will be chosen
const PORT = process.env.PORT || 5000;
var listener = app.listen(PORT);
console.log('Server started on port %s' , listener.address().port);