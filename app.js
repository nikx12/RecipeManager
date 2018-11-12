var express = require("express"),
    app = express(),
    methoOverride = require("method-override"), 
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
    var expressValidator= require("express-validator");
    var recipeRoutes = require("./routes/recipeRoute");
    var morgan = require("morgan");
    var Recipe = require("./models/recipe");
// APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methoOverride("_method"));
app.use(morgan("tiny"));
app.use(expressValidator());

app.use('/recipes', recipeRoutes);

//  Recipe.create(recipes,function(err, recipe){
//     if(err){
//         console.log("issue occurred");
//     }
//     else{
//         console.log(("Recipes saved to DB successfully"));
//         console.log(recipe);
        
//     }
        
       
//       });

//INDEX Route

app.get("/", function(req, res) {
    res.render("landing");

});

// app.get("/recipes",function(req, res) {
    
//     res.render("index", {recipes:recipes});
    
// });



app.listen(3000, function() {
    console.log("Server started!!");
});
