var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
    Email : {type : String,unique : true,lowercase : true},
    FirstName : {type : String},
    LastName : {type : String},
    Password : {type : String},
    UserType : {type : Number,default:1},
    Status : { type : Number,default:1},
    CreatedOn : {type : Date,default : Date.now}
})


module.exports = mongoose.model('Profile',ProfileSchema);

