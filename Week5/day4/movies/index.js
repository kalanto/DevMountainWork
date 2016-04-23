var express = require ('express');
var bodyParser = require('body-parser');
var moviesController = require('./controller/moviesController');
var logger = require('./middleware/logger');

var app = express();

app.use(bodyParser.json());

app.use(logger);

app.get('/movies', moviesController.index);
app.get('/movies/:id', moviesController.show);
app.post('/movies', moviesController.create);
app.put('/movies', moviesController.update);
app.delete('/movies', moviesController.destroy);

app.listen(4000, function(){
console.log("i can hear you clearly now");
});
