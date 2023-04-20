const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const MONGODB = "mongodb://localhost:27017";

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.connect(MONGODB, { useNewUrlParser: true }).then(() => {
  console.log("Mongo Connection Successful");
  return apolloServer.listen({ port: 5000 });
});
