/*
 * Controller for Add / Update / Delete of Profile table
 */
var flash = require('express-flash-messages')
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
  var input = JSON.parse(JSON.stringify(req.body));
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
    connection.query("UPDATE ConsumerDetails set ? WHERE ConsumerId = ?", [data, id], function(err, rows){
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
    });
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
