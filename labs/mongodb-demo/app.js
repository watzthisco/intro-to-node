var express = require('express');
var mongodb = require('mongodb').MongoClient;
var books = [
                {title:'East of Eden'},
                {title:'War and Peace'}
            ]; //add more
var app = express();
app.get('/addData', function(req,res){
    var url = 'mongodb://localhost:27017/booksApp';
    mongodb.connect(url,function(err,db){
        var collection = db.collection('books');
        collection.insertMany(books,
            function(err,results){
                res.send(results);
                db.close();
            });
    });
});
app.get('/viewAll', function(req,res){
    var url = 'mongodb://localhost:27017/booksApp';
    mongodb.connect(url,function(err,db){
        var collection = db.collection("books");
        collection.find({}).toArray(
            function(err, results) {
                res.send(results);
            }
        );
    });
});

app.listen(5000, function(err){
    console.log('running server');
});
