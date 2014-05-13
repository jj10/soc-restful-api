# Summer of Code: RESTful API with Node and Express

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

### Create
Creates a new record.

### Read
Reads a record or a list of records.

### Update
Updates a record.

### Delete
Deletes a record.

Pretty simple...right? This is the kind of actions that power API services like [Twitter](https://dev.twitter.com/docs/api/1.1) and [Instagram](http://instagram.com/developer/api-console/). So we're going to ahead and make our own. You can go ahead and clone this repository to get started!

## Getting your environment setup
After cloning this repository, you can run the following commands in your terminal:

```
cd path/to/soc-restful-api
npm install
```

This will install all the dependencies mentioned in `package.json` which is [Express](http://expressjs.com) and [MongoDB](https://www.mongodb.org).


## Seeing the answers
You can always checkout the answers branch in order to view that answers to the missing parts of this code.

## Challenges
1. Add your own custom route that will find movies from a given year or a range of years.
2. Add your own route that will search for movies by name and return any matches.
