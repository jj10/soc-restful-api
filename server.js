// The server framework we will be using.
var express = require('express');
var app = express();

var movies = require('./routes/movies');

app.use(express.bodyParser());

// This area is what shows up first. You can define the function that you want to run right here, 
// or you can define them in other files like it is done with the movies.
app.get('/', function(request, response) {
   response.send('<h1>Welcome to this site.</h1><p>This page does nothing but show this message.</p>'); 
});

// The READ routes
app.get('/movies', movies.findAll);
app.get('/movies/:id', movies.findById);

// The CREATE route
app.post('/movies', movies.addMovie);

// The UPDATE route
app.put('/movies/:id', movies.updateMovie);

// The DELETE route
app.delete('/movies/:id', movies.deleteMovie);

app.listen(3000);
console.log('Listening on port 3000...');