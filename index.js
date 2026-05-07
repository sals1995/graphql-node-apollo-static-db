import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";

const server= new ApolloServer({
    typeDefs,
    resolvers
})

let {url}=await startStandaloneServer(server,{listen:{
    port:3200
}})

console.log(`🚀  Server ready at: ${url}`);
