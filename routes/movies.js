// The database technology we will be using.
//var MONGOHQ_URL="mongodb://<user>:<pass>@oceanic.mongohq.com:10002/movies"
//var MONGOHQ_URL="mongodb://<our_company_name>:<the_usual_password_qa_uses>@oceanic.mongohq.com:10002/movies"
var MONGOHQ_URL="mongodb://optaros:o123123@oceanic.mongohq.com:10002/movies"

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var BSON = mongodb.BSONPure;

// Finds all movies.
exports.findAll = function(request, response) {
    MongoClient.connect(MONGOHQ_URL, function(err, db) {
        var collection = db.collection('movies');

        collection.find().toArray(function(error, movies) {
            response.json(movies);
        });
    });    
};

// Finds only one movie based on the id it has received.
exports.findById = function (request, response) {
    MongoClient.connect(MONGOHQ_URL, function(err, db) {
        var collection = db.collection('movies');

        collection.find({_id: new BSON.ObjectID(request.params.id)}).toArray(function(err, movie) {
            response.json(movie);
        });
    }); 
};

// Adds a new movie to the database.
exports.addMovie = function (request, response) {
    var movie = request.body;
    console.log('Adding Movie: ' + JSON.stringify(movie));

    MongoClient.connect(MONGOHQ_URL, function(error, db) {
        var collection = db.collection('movies');

        collection.insert(movie, function(error, result) {
            if (error) {
                response.send({'error':'An error has occurred'});
            } else {
                console.log('Successfully inserted movie: ' + JSON.stringify(result[0]));
                response.json(result[0]);
            }
        });
    }); 
};


// Updates a movie
exports.updateMovie = function (request, response) {
    var movie = request.body;

    MongoClient.connect(MONGOHQ_URL, function(err, db) {
        var collection = db.collection('movies');

        collection.update({_id: new BSON.ObjectID(request.params.id)}, movie, function(error, result) {
            if (error) {
                response.send({'error':'An error has occurred'});
            } else {
                console.log(result + ' document(s) updated');
                response.json(movie);
            }
        });
    }); 
};


// Deletes a movie
exports.deleteMovie = function (request, response) {
    MongoClient.connect(MONGOHQ_URL, function(err, db) {
        var collection = db.collection('movies');
        
        collection.remove({'_id':new BSON.ObjectID(request.params.id)}, function(error, result) {
            if (error) {
                ressponse.send({'error':'An error has occurred - ' + error});
            } else {
                console.log(result + ' document(s) deleted');
                response.send(request.body);
            }
        });
    });
};


// jo test
// Finds movies by date range
exports.findByDateRange = function (request, response) {
	var sDate = request.params.sDate;
	var eDate = request.params.eDate;
	console.log('sDate = '+sDate);
	console.log('eDate = '+eDate);
	
    MongoClient.connect(MONGOHQ_URL, function(err, db) {
        var collection = db.collection('movies');

		collection.find({
			year: {
				"$gte": sDate, 
				"$lte": eDate
			}
		}).toArray(function(error, movies) {
            response.json(movies);
        });
    }); 
};

// Finds movies title
exports.findByTitle = function (request, response) {
	var title = request.params.title;
	console.log('movie title = '+title);
	
    MongoClient.connect(MONGOHQ_URL, function(err, db) {
        var collection = db.collection('movies');
		var titleAnyMatch = new RegExp(title, "i");
	   
	    collection.find({title: titleAnyMatch}).toArray(function(error, movies) {
            response.json(movies);
        });
    }); 
};