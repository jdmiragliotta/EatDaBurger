var connection = require('./connection.js');

var orm = {
  add: function(tableInput, nameInput, cb) { 
    var query = "INSERT INTO " + tableInput + " (burger_name) VALUES (?)";
    connection.query(query, [nameInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  devour: function(tableInput, idInput, cb) {
    var query = "UPDATE " + tableInput + " SET devoured = 1  WHERE id = ?";
    connection.query(query, [idInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  selectAll: function(tableInput, cb) {
    var query = 'SELECT * FROM ' + tableInput + ';';
    connection.query(query, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
}


module.exports = orm;