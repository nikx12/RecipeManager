var express = require("express");
var router = express.Router();
//var User = require('../models/user'); 
var Recipe = require('../models/recipe'); 


 //home page route
router.get('/', function(req, res, next){
        res.render('index');
});


//CREATE - add new recipe to DB
// router.post("/recipes", function(req, res){
//     // get data from form and add to recipes array
//     var title = req.body.title;
//     var image = req.body.image;
//     var desc = req.body.description;
//     var newRecipe = {title: title, image: image, description: desc}
//     // Create a new recipe and save to DB
//     Recipe.create(newRecipe, function(err, newlyCreated){
//         if(err){
//             console.log(err);
//         } else {
//             //redirect back to recipes page
//             res.redirect("/recipes");
//         }
//     });
// });
module.exports = router;
