var connection = require('./connection.js');


var orm = {

  allBurgers: function(callback) {
    connection.query('SELECT * FROM burgers', function(err, result) {
      if (err) throw err;
      console.log(result);
      callback(result);
    });
  },

  addBurger: function(addBurger, callback) {
    connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, ?);', [addBurger, false], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  devourBurger: function(burger, callback) {
    connection.query('UPDATE burgers SET devoured=true WHERE burger_name=?', [burger], function(err, result) {
      if (err) throw err;
      callback(result);
    });
  }
}

module.exports = orm;