var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
   userName: String,
   firstName: String,
   lastName: String,
   email: String,
   phoneNumber: Number,
   password: String
   });

var User = mongoose.model('User',userSchema);

module.exports = User;
