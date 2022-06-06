const { ApolloServer } = require('apollo-server');
const typeDefs =  require('./src/graphql/schemas');
const resolvers =  require('./src/graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server running at ${url}`);
});
