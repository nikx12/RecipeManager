var express = require("express"),
    app = express(),
    methoOverride = require("method-override"), 
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
    var recipeRoutes = require("./routes/routes");
    var morgan = require("morgan");
    var Recipe = require("./models/recipe");

// APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methoOverride("_method"));
app.use(morgan("tiny"));

app.use('/recipes', recipeRoutes);
// var recipes= [
//               {title:'Lime Soda', image:"https://www.photosforclass.com/download/pixabay-1532300?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe830b20d2bf4013ed1584d05fb1d4e97e07ee3d21cac104496f6c77ea6ebb6b0_960.jpg&user=PhotoMIX-Company",
//                   description:"Mix lime juice and sugar together till the sugar dissolves.Add the club soda and stir lightly just to mix.Place crushed ice in 4 glasses and pour the soda over it.Garnish with mint leaves and serve at once."
//               },
//               {
//                 title:"Vegetable Maggi", image:"https://www.photosforclass.com/download/flickr-34936806134",
//                 description:"Step 1. To make this snack recipe, put a deep-bottomed pan over medium flame and add water in it and bring it to a boil. Meanwhile, take a chopping board and finely chop onion, capsicum, tomato and green chilli on it. Once the water begins to boil, add maggi masala noodles and peas to it and cook till the noodles and peas are soft and tender.Step 2. Next, in another pan, add butter and let it melt. Then, add chopped onion and saute till it changes color. Now, add garlic paste, chopped capsicum, tomato and green chilli to it and saute well for a couple of minutes, till the tomatoes are soft.Step 3. Next, in the sauted vegetables, add red chilli powder, turmeric powder, garam masala powder, black pepper powder in it and saute for a minute. Now, add the boiled maggi noodles and peas to this masala and mix well and cook for 1 more minute. Once done, transfer to a serving bowl and sprinkle a pinch of chaat masala over the noodles to make it even more flavorful. Serve it hot to enjoy!" 
//               },
//               {title:'Lime Soda', image:"https://www.photosforclass.com/download/pixabay-907124?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe035b60e2af01c22d2524518b7444795ea76e5d004b0144293f6c678a1eebd_960.jpg&user=stevepb",
//                   description:"Mix lime juice and sugar together till the sugar dissolves.Add the club soda and stir lightly just to mix.Place crushed ice in 4 glasses and pour the soda over it.Garnish with mint leaves and serve at once."
//               },
//               {
//                 title:"Vegetable Maggi", image:"https://www.photosforclass.com/download/flickr-34936806134",
//                 description:"Step 1. To make this snack recipe, put a deep-bottomed pan over medium flame and add water in it and bring it to a boil. Meanwhile, take a chopping board and finely chop onion, capsicum, tomato and green chilli on it. Once the water begins to boil, add maggi masala noodles and peas to it and cook till the noodles and peas are soft and tender.Step 2. Next, in another pan, add butter and let it melt. Then, add chopped onion and saute till it changes color. Now, add garlic paste, chopped capsicum, tomato and green chilli to it and saute well for a couple of minutes, till the tomatoes are soft.Step 3. Next, in the sauted vegetables, add red chilli powder, turmeric powder, garam masala powder, black pepper powder in it and saute for a minute. Now, add the boiled maggi noodles and peas to this masala and mix well and cook for 1 more minute. Once done, transfer to a serving bowl and sprinkle a pinch of chaat masala over the noodles to make it even more flavorful. Serve it hot to enjoy!" 
//               }
//               ]
//  Recipe.save(function(err, recipe){
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

app.get("/recipes",function(req, res) {
    
    res.render("index", {recipes:recipes});
    
});



app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server started!!");
});
