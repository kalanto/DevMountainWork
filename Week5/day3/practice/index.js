var express = require('express');
var bodyParser = require('body-parser');

var books = [];
var app = express();

app.use(bodyParser.json());

app.get('/books', function(req, res, next){
   res.status(200).json(books);
});

app.post('/books', function(req, res, next){
   books.push(req.body);
   res.status(200).json(books);
});

app.delete('/books/:id', function(req, res, next){
   var id = parseInt(req.params.id);
   books.splice(req.params.id, 1);
   res.status(200).send(books);
});

app.listen(3000, function(){
   console.log("running on port 3000");
});
