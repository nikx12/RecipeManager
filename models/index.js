var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/RecipeManager');
mongoose.Promise = Promise;

module.exports.User = require('./user');