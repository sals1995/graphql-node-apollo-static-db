import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";

const server= new ApolloServer({
    typeDefs,
    resolvers
})

let {url}=await startStandaloneServer(server,{listen:{
    port:3200
}})

console.log(`🚀  Server ready at: ${url}`);
