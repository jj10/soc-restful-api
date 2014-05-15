# Summer of Code: RESTful API with Node and Express

You can view the [video on YouTube here](http://youtu.be/ZvmI3_pg97M)!

Welcome to the first installment of the summer of code. This tutorial is the first in a series meant to introduce you to some key concepts that you may come across throughout your career as a front-end developer.

* [Session I: RESTful API](http://github.com/hacktaros/soc-restful-api)
* Session II: Backbone
* Session III: Ember
* Session IV: Angular

You will be using what we learned here in future tutorials to go over the major differences between these front-end javascript libraries and how you can use them in future projects.

## Prequisites
1. Download and install [Node](http://nodejs.org).
2. Download and install the [Cocoa Rest Client](https://code.google.com/p/cocoa-rest-client/) for Mac. 

That's pretty much it. You should be all ready to go!

## What is the deal with RESTful API?
You can read so much on this on the internet, but the most important part for this tutorial is the acronym, CRUD.

##### Create
Creates a new record.

##### Read
Reads a record or a list of records.

##### Update
Updates a record.

##### Delete
Deletes a record.

Pretty simple...right? This is the kind of actions that power API services like [Twitter](https://dev.twitter.com/docs/api/1.1) and [Instagram](http://instagram.com/developer/api-console/). So we're going to ahead and make our own. You can go ahead and clone this repository to get started!

## Getting your environment setup
After cloning this repository, you can run the following commands in your terminal:

```
cd path/to/soc-restful-api
npm install
```

This will install all the dependencies mentioned in `package.json` which is [Express](http://expressjs.com) and [MongoDB](https://www.mongodb.org). 

You will also need to update the credentials to the mongo database before your server will work. Go to `routes/movies.js` and update the `MONGOHQ_URL` to the following:

```javascript
var MONGOHQ_URL="mongodb://<our_company_name>:<the_usual_password_qa_uses>@oceanic.mongohq.com:10002/movies"
```

You can then start up your server by simple typing in `node server.js` in the same directory. You can then access the server at <localhost:3000>. Go ahead! Give it a shot! You should see a perfectly responsive welcome message.

## Working with Node and Express
`server.js` contains all of your routes and is where the entire application begins. You can see the that we require the Express library by including the lines `var express = require('express')`. When you installed the application using the `npm install` command earlier, you actually installed all the dependencies needed for this project. You can find the express files and the mongodb files in the folder `soc-restful-api/node_modules`.

You can also see that the app is listening on port 3000 with the line `app.listen(3000)`. This is why we go to the <localhost:3000> for the URL and access the application. Feel free to change the ports 

## The Routes in regards to CRUD
In `server.js`, you can see that we have the default route using: 

```javascript
app.get('/', function(request, response) { 
   response.send('<h1>Welcome to this site.</h1><p>This page does nothing but show this message.</p>'); 
});
```

To break this down a little bit, the first parameter of the `get()` function, you can see the actual route. The second parameter is the callback function which takes in a request variable and a response variable. The request will hold all the information regarding the request like get and post variables. If you're familiar with AJAX forms, then this is how you can retrieve the information from a form submission.

The response variable handles sending back information to the client. The `.send()` function does exactly what you would expect it to do. Sends something back to the client.

##### Mini Challenge
Go ahead and try to create a new route so you can access the URL <localhost:3000/count> and output a message to the screen. You will need to restart your server in order to see the changes you made. (Alternately you can install nodemon so you don't have to keep restarting your server to see changes you have made).

You can see the other routes defined for you below the default route.

```javascript
// The READ routes
app.get('/movies', movies.findAll);
app.get('/movies/:id', movies.findById);

// The CREATE route
app.post('/movies', movies.addMovie);

// The UPDATE route
app.put('/movies/:id', movies.updateMovie);

// The DELETE route
app.delete('/movies/:id', movies.deleteMovie);
```

For these, the functions are defined in a different file for clarity sake. It would be really confusing to have everything in the same file, so we moved it to its own file. The variable `movies` is defined near the top in a similar fashion that express is defined.

```javascript
var movies = require('./routes/movies');
````

If you go to routes directory, you will see a file `movies.js` made for you. This is where all the functionality for accessing movies will live. You can view the comments to get a better sense of what's happening on each line.

## Challenges for Future Discussion
1. Write a route that gets the movies in a range of years.
2. Write a route that finds a movie by its name. (This probably won't work right now due to limitations on getting a full text search at the moment. I would suggest making a local copy of the collection and trying to search that.)

## More Information and Resources
* [Node Documentation](http://nodejs.org/api/)
* [Express Documentation](http://expressjs.com/4x/api.html)
* [Mongo Documentation](http://docs.mongodb.org/manual/)
* [Code School Tutorial for Node, Express, and Sockets](https://www.codeschool.com/courses/real-time-web-with-nodejs)
* [Video Tutorial fo this Workshop](http://vimeo.com/95171212)
