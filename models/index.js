var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/recipe_manager', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports.User = require('./user');
module.exports.Recipe = require('./recipe');
module.exports.Comment = require('./comment');


