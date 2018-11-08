 var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/RecipeManager', { useNewUrlParser: true });
var recipeSchema = new mongoose.Schema({
   userName: String,
   title: String,
   image: String,
   description: String,
   });

var Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
