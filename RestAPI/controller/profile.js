/*
 * Controller for Add / Update / Delete of Profile table
 */
var flash = require('express-flash-messages')

let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

const currentDateTime=year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

exports.checkLogin=function(req,res){
 var email=req.body.loginObj.Email;
  var password=req.body.loginObj.Password;
  req.getConnection(function(err, connection){
    var query = connection.query("SELECT * FROM ConsumerDetails WHERE Email = ? AND Password=md5(?)", [email,password], function(err, rows){
      if(err) console.log("Error Selecting user : %s", err);
       res.send({status:200,data:rows});
    });
  });
}
 // Single Profile View
 exports.view = function(req, res){
   var id = req.params.id;
   req.getConnection(function(err, connection){
     var query = connection.query("SELECT * FROM ConsumerDetails WHERE ConsumerId = ?", [id], function(err, rows){
       if(err) console.log("Error Selecting list : %s", err);
	      res.send({status:200,data:rows});
     });
   });
 };

// Profile list Export
exports.list = function(req, res){
  req.getConnection(function(err, connection){
    var query = connection.query("SELECT * FROM ConsumerDetails", function(err, rows){
      if(err) console.log("Error Selecting list : %s", err);
	res.send({status:200,data:rows});
    });
  });
};

// Profile Add
exports.add = function(req, res){
  res.render("profile-add",{
    title : "Nodejs CRUD: Profile Add",
    secondaryTitle: "Add Profile",
  })
}

// Profile Edit
exports.edit = function(req, res){
  var id = req.params.id;
  req.getConnection(function(err, connection){
    var query = connection.query("SELECT * FROM ConsumerDetails WHERE ConsumerId = ?", [id], function(err, rows){
      if(err) console.log("Error Editing list : %s", err);
	res.send({status:200,data:rows});
    });
  });
};

//Profile save
exports.save = function(req, res){
  var input=req.body.regObj;
  req.getConnection(function(err, connection){
    var data = {
      FirstName: input.FirstName,
      LastName: input.LastName,
      Email: input.Email,
      Password: input.Password,
      UserType: input.UserType,
      Status: input.Status,
      LastModified: currentDateTime
    };
    console.log(JSON.stringify(data));
    var query = connection.query("INSERT INTO ConsumerDetails set ?", data, function(err, rows, fields){
      if(err)
        console.log("Error in Inserting Data : %s", err);
      else{
        var query = connection.query("SELECT * FROM ConsumerDetails WHERE ConsumerId = ?", rows.insertId, function(err, rows){
          if(err) console.log("Error Editing list : %s", err);
	res.send({status:200,data:rows});
        });

      }
    });
  });
};

//Profile Save Edit
exports.save_edit = function(req, res){
  var input = JSON.parse(JSON.stringify(req.body));
  var id = req.params.id;
  req.getConnection(function(err, connection){
    var data = {
      first_name: input.first_name,
      last_name: input.last_name,
      email: input.email,
      phone: input.phone,
      street_address: input.street_address,
      street_address_2: input.street_address_2,
      city: input.city,
      state: input.state,
      country: input.country
    };
    console.log(JSON.stringify(data));
   /* connection.query("UPDATE ConsumerDetails set ? WHERE ConsumerId = ?", [data, id], function(err, rows){
      if(err)
        console.log("Error in Updating : %s", err);
      else{
        var query = connection.query("INSERT INTO ConsumerDetails set ?", data, function(err, rows, fields){
          if(err)
            console.log("Error in Inserting Data : %s", err);
          else{
            var query = connection.query("SELECT * FROM ConsumerDetails WHERE ConsumerId = ?", rows.insertId, function(err, rows){
              if(err) console.log("Error Editing list : %s", err);
		res.send({status:200,data:rows});
            });

          }
        });
      }
    });*/
  });
};

//Profile DELETE
exports.delete = function(req, res){
  var id = req.params.id;
  req.getConnection(function(err, connection){
    connection.query("DELETE FROM ConsumerDetails WHERE ConsumerId = ? ", [id], function(err, rows){
      if(err)
        console.log("Error in Deleting : %s", err);
      else{
        console.log("Profile Deleted: %s", rows);
        res.send({status:200,data:rows});
      }
    });
  });
};
