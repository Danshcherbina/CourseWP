var mongoose    = require('mongoose');
var Schema = mongoose.Schema;

// Schemas
var User = new Schema({
    username : {
      type : String,
      unique : true,
      required : true,
    },
    email : {
      type : String,
      required : true,
    },
    password : {
      type : String,
      required : true,
    },
    image : {
      type : String
    },
});

var UserTemplate = mongoose.model('users', User);

module.exports.UserTemplate = UserTemplate;
