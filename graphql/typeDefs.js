const { gql } = require("apollo-server");

module.exports = gql`
  scalar ObjectID

  type Recipe {
    id: ObjectID
    name: String
    description: String
    createdAt: String
    thumbsDown: Int
    thumbsUp: Int
  }

  input RecipeInput {
    name: String
    description: String
  }

  type Query {
    recipe(ID: ID!): Recipe!
    getRecipies(amount: Int): [Recipe]
  }

  type Mutation {
    createRecipe(input: RecipeInput!): Recipe!
    deleteRecipe(ID: ID!): Boolean
    editRecipe(ID: ID!, recipeInput: RecipeInput): Boolean
  }
`;
