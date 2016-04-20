// console.log('Bueno');

var express = require('express');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());

app.get('/', function(req, res, next){
   res.status(200).send({message: 'hello'});
});

app.post('/users', function(req, res, next) {
   users.push(req.body);
   res.status(200).json(users);
});

app.delete('/users', function(req, res, next){
   users.pop();
   // res.status(200).jsson(users);
   res.sendStatus(204);
});

app.listen(3000, function(){
   console.log('listening on port 3000');
});
