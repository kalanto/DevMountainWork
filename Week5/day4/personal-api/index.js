var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/latestOccupation', mainCtrl.getOccupationsLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.sortHobbies);
app.get('/skills', mainCtrl.getSkills);

app.put('/name/:newName', mainCtrl.putName);
app.put('/location/:newLocation', mainCtrl.putLocation);

app.post('/hobbies', mainCtrl.postHobbies);
app.post('/occupations', mainCtrl.postOccupations);
app.post('/skills', mainCtrl.postSkills);
app.listen(3000, function() {
   console.log("NSA link enabled");
});
