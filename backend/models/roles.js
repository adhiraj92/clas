var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
  name: String,
  permissions: Array
});

var Roles = mongoose.model('Roles', Schema);

module.exports = Roles;
