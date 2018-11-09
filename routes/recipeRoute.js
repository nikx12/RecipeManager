var express = require("express");
var request = require("request");
var router = express.Router();
//var User = require('../models/user');
var Recipe = require("../models/recipe");
var fs = require('fs');


//home page route
router.get("/", function(req, res, next) {
  res.render("landing", { Recipe });
});

router.get("/all", function(req, res, next) {
  // request(
  //   " https://www.food2fork.com/api/search?key=5785b0bb7e316777b636de085c35d1bf",
  //   function(error, response, body) {
  //     if (!error && response.statusCode == 200) {
  //       var x = JSON.parse(body);
  //       console.log(x,"************");
  //       var y = x.recipes;
  //       console.log(y,"###########################");
  //       // y.forEach(data => {
  //         res.render("index", { recipes:y });
  //       // });
  //       // fs.writeFile('mynewfile3.js', JSON.stringify(y), function (err) {
  //       //         if (err) throw err;
  //       //         console.log('Saved!');
  //       //       });
  //     }
  //   }
  // );

  Recipe.find({},function(err,allRecipes){
    if(err)
    {
        console.log(err);
    }
    else{
        res.render("campgrounds",{recipe:allRecipes});
    }
  });
  app.get("/recipees/landing",function(req,res){
      res.render("landing");
  });
});

router.get("/new", function(req, res) {
  res.render("new");
});

router.post("/new", function(req, res){
        console.log(req.body, "%%%%%%%%%%%%%%%%%%%%%%%%%%%")
        // res.send("<h1>You have clicked on submit for new recipe</h1>");
        var name= req.body.name;
        var image= req.body.image;
        var desc= req.body.desc;
        var newRecipe= {name:name, image:image, desc:desc};
        Recipe.create(newRecipe, function(err, newRecipeObj){
          if(err){
            console.log(err);
          }
          else{
            res.redirect("/all");
          }
        })
})

      router.get('/:id', function(req, res, next){
              console.log(req.body,"!!!!!!!!!!!!!!!!!!!!!!");
       // var recipe = Recipe.find(val => val.id === Number(req.params.id));
        res.render('show', {recipe: req.body});
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
