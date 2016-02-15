var orm = require('../config/orm.js');


var addOrDevour = {

  findAllBurgers: function(callback) {
    orm.allBurgers(callback);
  },

  addBurger: function(burgerName, callback) {
    orm.newBurger(burgerName, callback);
  },

  devour: function(burgerName, callback) {
    orm.devour(burgerName, callback);
  }
}


module.exports = addOrDevour;