var express = require("express");
var request = require("request");
var bodyParser = require('body-parser');
var router = express.Router();
//var User = require('../models/user');
var Recipe = require("../models/recipe");
router.use(bodyParser.json())
// var fs = require('fs');


//home page route
// router.get("/", function(req, res, next) {
//   res.render("landing", { Recipe });
// });
// console.log("RRECIPEEEEE", Recipe)
router.get("/", function(req, res, next) {
   Recipe.find({},function(err,allRecipes){
    if(err)
    {
      console.log("ERRRRRRROORRRRR")
        console.log(err);
    }
    else{
       // console.log(req.body);
        console.log(allRecipes, "@@@@@@@@")
       // res.send("All recipes are here!!");
       res.render("allRecipes",{recipes:allRecipes});
    }
  });
 
});

router.get("/addRecipe", function(req, res) {
  res.render("addRecipe");
});

router.post("/addRecipe", function(req, res){
        console.log(req.body, "%%%%%%%%%%%%%%%%%%%%%%%%%%%")
        // res.send("<h1>You have clicked on submit for new recipe</h1>");
        var user= "test"
        var name= req.body.title;
        var image= req.body.image;
        var desc= req.body.description;
        var ingredients= req.body.ingredients;
        var method= req.body.method;
        var newRecipe= {title:name, image:image, description:desc, ingredients:ingredients, method:method, username: user};
        console.log("$$$$$$$$$$$", newRecipe)
        Recipe.create(newRecipe, function(err, newRecipeObj){
          console.log("^^^^^^^^^", newRecipe)
          if(err){
            console.log("^^^^^^^^^", newRecipe)

            console.log(err);
          }
          else{
            console.log("Entry made to db")
            console.log("************", newRecipeObj)
            res.redirect("/recipes");
          }
        })
})

//route to show info about one particular recipe
      router.get('/:id', function(req, res, next){
        Recipe.findById(req.params.id, (err, foundRecipe)=>{
          if(err){
            console.log("ERRROR IN FINDING ID")
          }
          else{
            console.log(req.params,"!!!!!!!!!!!!!!!!!!!!!!");
            res.render('show', {recipe: foundRecipe});
          }
        })
        
      });

//       router.get('/:id/edit', function(req, res, next){
//         var recipe = Recipe.find(val => val.id === Number(req.params.id));
//         res.render('edit', {recipe});
//       });

//       // instead of app.post...
//       router.post('/', function(req, res, next){
//         recipe.push({
//           name: req.body.name
//         //   id: ++id
//         });
//         res.redirect('/');
//       });

//       // instead of app.patch...
//       router.patch('/:id', function(req, res, next){
//         var recipe = Recipe.find(val => val.id === Number(req.params.id));
//         recipe.name = req.body.name;
//         res.redirect('/users');
//       });

//       // instead of app.delete...
//       router.delete('/:id', function(req, res, next){
//         var recipeIndex = Recipe.findIndex(val => val.id === Number(req.params.id));
//         Recipe.splice(recipeIndex,1);
//         res.redirect('/');
//       });

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
