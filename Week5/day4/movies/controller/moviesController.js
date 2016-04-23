var movies = require('../models/movies');

module.exports = {

   index: function(res, req, next){
      res.status(200).json(movies);
   },
   show: function(res, req, next){
      var id = parseInt(req.query.id);
      res.status(200).json(movies[id]);
   },
   create: function(res, req, next){
      
   },
   update: function(res, req, next){

   },
   destroy: function(res, req, next){

   }

};
