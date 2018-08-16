var mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://admin:admin123@ds121332.mlab.com:21332/tempdata', { useNewUrlParser: true });
mongoose.Promise = Promise;

module.exports.Routes = require('./routes');
module.exports.Roles = require('./roles');
