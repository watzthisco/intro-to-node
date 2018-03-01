const express = require('express');
const mongodb = require('mongodb').MongoClient;
const app = express();
const books = [
    {title:'East of Eden'},
    {title:'War and Peace'}
    ]; //add more
const url = 'mongodb://localhost:27017/booksApp';


app.get('/addData', function(req,res){
    mongodb.connect(url, function(err,database) {
        let myDb = database.db('booksApp');
        let collection = myDb.collection('books');
        collection.insertMany(books,
            function(err,results){
                res.send(results);
                db.close();
            });
    });
});
app.get('/viewAll', function(req,res){
    mongodb.connect(url,function(err,database){
        let myDb = database.db('booksApp');
        let collection = myDb.collection('books');
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
