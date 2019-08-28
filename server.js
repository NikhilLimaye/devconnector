//Import express module
const express = require('express');
const connectdb = require('./config/db');
//Create express instance. Equivalent of saying 'new express()'
const app = express();

//Connect to db
connectdb();

app.use(express.json({extended : false}));
app.get('/' ,(req,res) => res.send('API is running'));

//Define routes
app.use('/api/users' , require('./routes/api/users'));
app.use('/api/auth' , require('./routes/api/auth'));
app.use('/api/profile' , require('./routes/api/profile'));
app.use('/api/posts' , require('./routes/api/posts'));

//server will look for environment variable named "PORT". If not found port 5000 will be chosen
const PORT = process.env.PORT || 5000;
var listener = app.listen(PORT);
console.log('Server started on port %s' , listener.address().port);