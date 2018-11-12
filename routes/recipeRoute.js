var express = require("express");
var request = require("request");
var router = express.Router();
//var User = require('../models/user');
var Recipe = require("../models/recipe");
// var fs = require('fs');


//home page route
// router.get("/", function(req, res, next) {
//   res.render("landing", { Recipe });
// });

router.get("/", function(req, res, next) {
   Recipe.find({},function(err,allRecipes){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(req.body);
        res.send("All recipes are here!!");
        // res.render("allRecipes",{recipes:allRecipes});
    }
  });
  //
  
});

router.get("/new", function(req, res) {
  res.render("addRecipe");
});

router.post("/new", function(req, res){
        console.log(req.body, "%%%%%%%%%%%%%%%%%%%%%%%%%%%")
        // res.send("<h1>You have clicked on submit for new recipe</h1>");
        var user= "test"
        var name= req.body.name;
        var image= req.body.image;
        var desc= req.body.desc;
        var ingredients= req.body.ingredients;
        var method= req.body.method;
        var newRecipe= {userName: user,name:name, image:image, desc:desc, ingredients:ingredients, method:method};
        Recipe.create(newRecipe, function(err, newRecipeObj){
          if(err){
            console.log(err);
          }
          else{
            console.log("Entry made to db")
            res.redirect("/landing");
          }
        })
})

      // router.get('/:id', function(req, res, next){
      //         console.log(req.body,"!!!!!!!!!!!!!!!!!!!!!!");
      //  // var recipe = Recipe.find(val => val.id === Number(req.params.id));
      //   res.render('show', {recipe: req.body});
      // });

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
