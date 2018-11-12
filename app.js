var express = require("express"),
    app = express(),
    methoOverride = require("method-override"), 
    bodyParser = require("body-parser");
    // mongoose = require("mongoose");
    var expressValidator= require("express-validator");
    var recipeRoutes = require("./routes/recipeRoute");
    var morgan = require("morgan");
    // var Recipe = require("./models/recipe");
// APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methoOverride("_method"));
app.use(morgan("tiny"));
app.use(expressValidator());

app.use('/recipes', recipeRoutes);

//INDEX Route

app.get("/", function(req, res) {
    res.render("landing");

});

//login routes
app.get("/login", (req, res)=>{
    res.render("login");
})
app.post("/login", (req, res)=>{
    res.render("/allRecipes")
})

// signup routes
app.get("/signup", (req, res)=>{
    res.render("signUp")
})

app.post("/signup", (req, res)=>{
    res.render("/login")
})


app.listen(3000, function() {
    console.log("Server started!!");
});
