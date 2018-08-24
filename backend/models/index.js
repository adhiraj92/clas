var mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
mongoose.Promise = Promise;

module.exports.Routes = require('./routes');
module.exports.Roles = require('./roles');
