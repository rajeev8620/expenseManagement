const PROFILE = require('../models/profile.model');
var bcrypt = require('bcrypt');
var BCRYPT_SALT_ROUNDS = 12;

const profileController = {};


profileController.userDetails = function (req, res) {
    PROFILE.find({},function(err,profiles){
        if(err){
            res.json({
                status : false,
                error : err
            })
        }
        else{
            res.json({
                status : true,
                profile : profiles
            })
        }
    })
};

profileController.userDetailsById = function (req, res) {
    PROFILE.find({_id:req.params.id},function(error,profiles){
        if(error){
            res.json({
                status:false,
                message:error
            })
        }else{
            res.json({
                status:true,
                profile:profiles
            }) 
        }
    })
};

profileController.insertUser = function (req, res) {    
    var Password = req.body.Password;
    var prof = new PROFILE();
    prof.Email=req.body.Email;
    prof.FirstName=req.body.FirstName;
    prof.LastName =req.body.LastName;
    bcrypt.hash(Password, BCRYPT_SALT_ROUNDS)
        .then(function(hashedPassword) {
            prof.Password =hashedPassword;
        })
        .then(function() {
            prof.save();
            res.json({
                status : 200,
                message : "User registrered successfully"
            })
        })
        .catch(function(error){
            res.json({
                status : 403,
                message : error
            })
        });
};

profileController.checkLogin = function (req, res) {
    PROFILE.findOne({Email:req.body.Email},function(error,users){
        if(users){
            bcrypt.compare(req.body.Password, users.Password, function (err, result) {
               if(err) {
                    res.json({
                        status : 403,
                        error : err
                    })
    
                } else if(result) {
                    res.json({
                        status : 200,
                        user : users
                    })
                }else{
                    res.json({
                        status : 403,
                        Message : "Password not matching!"
                    })
                }
              });
        }else{
            res.json({
                status : 403,
                message : "User not found!"
            }) 
        }
        
    });
    
};

profileController.updateUser = function (req, res) {
    PROFILE.update({_id:req.params.id},{$set:req.body},function(error,users){
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

profileController.deleteUser = function (req, res) {
    PROFILE.remove({_id:req.params.id},function(error,users){
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


module.exports=profileController;