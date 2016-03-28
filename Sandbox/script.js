var module = (function() {
    var person = {
        name: "phillip",
        age: 29,
        location: 'Utah'
    };

    var privateMethod = function(){
        return person.name + ' ' + person.age + ' ' + person.location
    };

    return {
       // your publicMethod here
      var publicMethod = function(){
      return privateMethod;
    	}
    };

})();

 module.publicMethod();
