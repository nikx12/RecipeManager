var express = require("express"),
  app = express(),
  methoOverride = require("method-override"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  passport= require("passport"),
  passLocal= require("passport-local"),
  passportLocalMongoose= require("passport-local-mongoose");
var expressValidator = require("express-validator");
var recipeRoutes = require("./routes/recipeRoute");
var morgan = require("morgan");
var Recipe = require("./models/recipe");
var User = require("./models/user");
var Comment = require("./models/comment");

mongoose.set("debug", true);
mongoose.connect(
  "mongodb://localhost:27017/recipe_manager",
  { useNewUrlParser: true }
);
// APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methoOverride("_method"));
app.use(morgan("tiny"));
app.use(expressValidator());
app.use(passport.initialize());
app.use(passport.session());
app.use("/recipes", recipeRoutes);

// Recipe.create(
//   {
//     title: "Test recipe",
//     image: "https://upload.wikimedia.org/wikipedia/en/9/95/Test_image.jpg",
//     description: "Testing desc",
//     ingredients: "Test ingredients",
//     method: "Test method"
//   },
//   function(err, res) {
//     if (err) {
//       console.log("ERROR");
//     } else {
//       console.log("UESSSSSS");
//     }
//   }
// );

//INDEX Route

app.get("/", function(req, res) {
  res.render("landing");
});

//login routes
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", (req, res) => {

  res.redirect("/allRecipes");
});

// profile page
app.get("/profile", (req, res)=>{
    res.render("profile")
})

// signup routes
app.get("/signup", (req, res) => {
  res.render("signUp");
});

app.post("/signup", (req, res) => {
  console.log(req.body, "SIGNUPPP");

  var userName = req.body.username;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var password = req.body.password;
  var email = req.body.email;
  var phoneNumber = req.body.phoneNumber;
  var newUser = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    password: password,
    userName: userName
  };
  console.log("USERRRR", newUser);
  User.create(newUser, function(err, newUserObj) {
    if (err) {
      console.log(err);
    } else {
      console.log("Entry made to user db");
      console.log("******USERR******", newUserObj);
      res.redirect("/login");
    }
  });
});

app.listen(3000, function() {
  console.log("Server started!!");
});
