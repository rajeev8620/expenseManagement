var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());
var cors = require('cors')
//mongodb connection start
mongoose.connect("mongodb://localhost/ExpenseManagement",{ useNewUrlParser: true, useCreateIndex:true},function(err){
if(err){
    console.log('The error is ',err)
}
else{
console.log('Mongo database connected!')
}
})
//mongoose.set('useCreateIndex', true);
//mongodb connection end
app.use(cors())

//user start
var userRouter = require('./routes/user');
app.use('/api/admin/users',userRouter);
//user stop

//Profile start
var profileRouter = require('./routes/profile');
app.use('/api/admin/profiles',profileRouter);
//Profile stop

var port=5000;
app.listen(port,function(){
    console.log('Server started, listening to port: ',port)
})