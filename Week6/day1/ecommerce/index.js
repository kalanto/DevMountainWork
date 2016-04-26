//dependencies//
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var mongo = require('mongojs');
//application and database//
var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname+ '/putlic'));
var db = mongo('ecommerce', ['products']);
//end points//
app.post('/api/products', function(req, res, next){
   db.products.save(req.body, function(err, response){
      if(err){
         res.status(500).json(err);
      }
      else{res.json(response);}
   });
});
app.get('/api/products', function(req, res, next){
    var query = req.query;
      db.products.find(query, function(err, response){
         if(err){
            res.status(500).json(err);
         }
         else{
            res.json(response);
         }
      });
});
app.get('/api/products/:id', function(req, res){
	var idObj = {
		_id: mongo.ObjectId(req.params.id)
	};
	db.products.findOne(idObj, function(err, response){
		if(err) {
			res.status(500).json(err);
		} else {
			res.json(response);
		}
	});
});
app.put('/api/products/:id', function(req, res){
	// if(!req.params.id){
	// 	return res.status(400).send('id query needed');
	// }
	var query = {
		_id: mongo.ObjectId(req.params.id)
	};
	db.products.update(query, req.body, function(error, response){
		if(error) {
			return res.status(500).json(error);
		} else {
			return res.json(response);
		}
	});
});
app.delete('/api/products/:id', function(req, res){
	// if(!req.params.id){
	// 	return res.status(400).send('id query needed');
	// }
	var query = {
		_id: mongo.ObjectId(req.params.id)
	};
	db.products.remove(query, function(error, response){
		if(error) {
			return res.status(500).json(error);
		} else {
			return res.json(response);
		}
	});
});
//application port//
app.listen(8505, function(){
   console.log('NSA link active on port 8505');
});
