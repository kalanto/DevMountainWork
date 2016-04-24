var express = require ('express');
var session = require('express-session');
var bodyParser = require ('body-parser');
var cors = require('cors');
var config = require('./config.js');
var profile = require('./controllers/profileCtrl.js');
var user = require('./controllers/userCtrl.js');


var app = express();

var corsOptions = {
    origin: 'http://localhost:8999'
};

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));

app.post('/api/login', user.login);
app.get('/api/profiles', profile.getFriends);

app.listen(4000, function(){
   console.log("NSA LINK ENABLED");
});
