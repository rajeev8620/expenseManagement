var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email : {type : String,unique : true,lowercase : true},
    name : {type : String},
    password : {type : String},
    picture : {type : String},
    isSeller : {type : Boolean},
    address : {
        add1 : {type : String},
        add2 : {type : String},
        city : {type : String},
        state : {type : String},
        country : {type : String},
        pincode : {type : String}
    },
    contactNumber:{type:String},
    created : {type : Date,default : Date.now}
})


module.exports = mongoose.model('User',UserSchema);

