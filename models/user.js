var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
  userName: String,
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: Number,
  password: String
});

userSchema.plugin(passportLocalMongoose);
var User = mongoose.model("User", userSchema);

module.exports = User;
