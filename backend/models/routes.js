var mongoose = require('mongoose');

var Schema = new mongoose.Schema({
  name: String,
  url: String,
  imgurl: String
});

var Route = mongoose.model('Routes', Schema);

module.exports = Route;
