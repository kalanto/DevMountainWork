//dependencies//
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var mongoose = require('mongoose');
var Product = require('./schema.js');
//connect mongoose database//
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost/data');

//application and database//
var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname+ '/putlic'));


//end points//
app.post('/api/products', function(req, res, next){
   var product = new Product(req.body);
   product.save(function(err, response){
      if(err){
         res.status(500).send(err);
      }
      else{res.send(response);}
   });
});
app.get('/api/products', function(req, res, next){
    var query = req.query;
      Product.find(query, function(err, response){
         if(err){
            res.status(500).send(err);
         }
         else{
            res.send(response);
         }
      });
});
app.get('/api/products/:id', function(req, res){
	Product.findOne(req.params.id, function(err, response){
		if(err) {
			res.status(500).send(err);
		} else {
			res.send(response);
		}
	});
});
app.put('/api/products/:id', function(req, res){
	// if(!req.params.id){
	// 	return res.status(400).send('id query needed');message
	// }
	Product.update(req.params.id, function(error, response){
		if(error) {
			return res.status(500).send(error);
		} else {
			return res.send(response);
		}
	});
});
app.delete('/api/products/:id', function(req, res){
	// if(!req.params.id){
	// 	return res.status(400).send('id query needed');
	// }
	Product.remove(req.params.id, function(error, response){
		if(error) {
			return res.status(500).send(error);
		} else {
			return res.send(response);
		}
	});
});
//application port//


app.listen(8505, function(){
   console.log('NSA link active on port 8505');
});
