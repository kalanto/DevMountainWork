var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var prodSchema = new Schema({
   Title: {
      type: String,
      required: true,
      unique: true,
      // index: 2
   },
   Description: {
      type: String,
      required: true
   },
   Price: {
      type: Number,
      required: true,
      min: 0
   }
});
module.exports = mongoose.model('Product', prodSchema);
