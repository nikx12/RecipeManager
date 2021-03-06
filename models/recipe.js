var mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb://localhost:27017/RecipeManager",
//   { useNewUrlParser: true }
// );
var recipeSchema = new mongoose.Schema({
  // userName: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "user"
  // },
  title: String,
  image: String,
  description: String,
  ingredients: String,
  method: String,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  // username: String
});

var Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
