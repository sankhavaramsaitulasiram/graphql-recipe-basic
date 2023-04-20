const Recipe = require("../models/Recipe");

module.exports = {
  Query: {
    async recipe(_, { ID }) {
      return await Recipe.findById(ID);
    },
    async getRecipies(_, { amount }) {
      return await Recipe.find().sort({ createdAt: -1 }).limit(amount);
    },
  },
  Mutation: {
    async createRecipe(_, { input: { name, description } }) {
      const createdRecipe = new Recipe({
        name,
        description,
        thumbsDown: 0,
        thumsUp: 1,
      });
      await createdRecipe.save();
      return createdRecipe;
    },

    async deleteRecipe(_, { ID }) {
      return (await Recipe.deleteOne({ _id: ID })).deletedCount;
    },

    async editRecipe(_, { ID, recipeInput: { name, description } }) {
      return (
        await Recipe.updateOne(
          { _id: ID },
          { name: name, description: description }
        )
      ).modifiedCount;
    },
  },
};
