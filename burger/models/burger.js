var orm = require("../config/orm.js");

var burgers = {
  addBurger: function(nameInput, cb){
    orm.add("burgers", nameInput, cb);
  },
  devourBurger: function(inputId, cb){
    orm.devour("burgers", inputId, cb);
  },
  findAll: function(cb) {
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  }
};

module.exports = burgers;