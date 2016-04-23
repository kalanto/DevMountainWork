var occupations = ["Pimpin ain't easy","Indoor Herb farmer"];
var hobbies = [{
   "name": "hacking",
   "type": "current"
},{
   "name": "barking at people",
   "type": "always"
}];
var skills = [{
   "id": 1,
   "name": "javascript",
   "experience": "Intermediate"
},{
   "id": 2,
   "name": "taco eating",
   "experience": "expert"
}];

module.exports = {
   getName: function(req, res, next){
      res.status(200).json({"Name": "Your Name"});
   },
   getLocation: function(req, res, next){
      res.status(200).json({"Location": "Utarh"});
   },
   getOccupations: function(req, res, next){
      if(req.query && req.query.order === "asc"){
         res.status(200).json(occupations.sort());}
      if(req.query && req.query.order === "desc"){
         res.status(200).json(occupations.sort().reverse());
      }
      else{
      res.status(200).json(occupations);
   }
   },
   getOccupationsLatest: function(req, res, next){
      res.status(200).json({"latestOccupation": "Hacking"});
   },
   getHobbies: function(req, res, next){
      res.status(200).json(hobbies);
   },
   sortHobbies: function(req, res, next){
      for(var i = 0; i < hobbies.length; i++){
         if(hobbies[i].type === req.params.type){
            res.status(200).json(hobbies[i]);
         }
      }
   },
   putName: function(req, res, next){
      var newName = req.params.newName;
      res.status(200).json({"Name": newName});
   },
   putLocation: function(req, res, next){
      var newLocation = req.params.newLocation;
      res.status(200).json({"Location": newLocation});
   },
   postHobbies: function(req, res, next){
      hobbies.push(req.body);
      res.status(200).json(hobbies);
   },
   postOccupations: function(req, res, next){
      occupations.push(req.body.key);
      res.status(200).json(occupations);
   },
   // getSkills: function(req, res, next){
   //    res.status(200).json(skills);
   // },
   getSkills: function(req, res, next){
      if(req.query.experience){
         var results = [];
         for(var i = 0; i < skills.length; i++){
            if(req.query.experience === skills[i].experience){
               results.push(skills[i].name);
            }
         }
         res.status(200).json(results);
      }
      res.status(200).json(skills);
   },
   postSkills: function(req, res, next){
      skills.push({
      "id": skills.length+1,
      "name": req.body.name,
      "experience": req.body.experience});
   res.status(200).json(skills);
}
};
