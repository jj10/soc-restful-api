// The server framework we will be using.
var express = require('express');
var app = express();

var movies = require('./routes/movies');

app.use(express.bodyParser());

app.get('/movies', movies.findAll);
app.get('/movies/:id', movies.findById);
app.post('/movies', movies.addMovie);
app.put('/movies/:id', movies.updateMovie);
app.delete('/movies/:id', movies.deleteMovie);

app.listen(3000);
console.log('Listening on port 3000...');