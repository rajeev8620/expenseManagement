const User = require('../models/user.model');

const userController = {};


userController.userDetails = function (req, res) {
    User.find({},function(err,users){
        if(err){
            res.json({
                status : false,
                error : err
            })
        }
        else{
            res.json({
                status : true,
                users : users
            })
        }
    })
};

userController.userDetailsById = function (req, res) {
    User.find({_id:req.params.id},function(error,users){
        if(error){
            res.json({
                status:false,
                message:error
            })
        }else{
            res.json({
                status:true,
                users:users
            }) 
        }
    })
};

userController.insertUser = function (req, res) {
    var usr = new User();
    usr.name = req.body.name;
    usr.email = req.body.email;
    usr.password = req.body.password;
    usr.contactNumber=req.body.contactNumber;
    usr.save();
    res.json({
        status : true,
        message : "User registrered successfully"
    })
};

userController.updateUser = function (req, res) {
    User.update({_id:req.params.id},{$set:req.body},function(error,users){
        if(error){
            res.json({
                status:false,
                message:error
            })
        }else{
            res.json({
                status:true,
                message:"user updated successfully!"
            }) 
        }
    })
};

userController.deleteUser = function (req, res) {
    User.remove({_id:req.params.id},function(error,users){
        if(error){
            res.json({
                status:false,
                message:error
            })
        }else{
            res.json({
                status:true,
                message:"user deleted successfully!"
            }) 
        }
    })
};


module.exports=userController;