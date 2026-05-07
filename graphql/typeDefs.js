const typeDefs = ` #graphql
    type Query{
        welcome: String

        users:[User]
        user(id:Int!):User
        todos:[Todo]
        todo(id:Int!):Todo
    }
    type User{
        id:Int!
        name:String
        email:String
        todos:[Todo]
    }
    type Todo{
        id:Int!
        title:String
        completed:Boolean
        user:User
    }
    type Mutation{
        addTodo(todo:TodoInput!,userId:Int):Todo
        updateTodo(id:Int!,todo:TodoInput!,userId:Int):Todo
        deleteTodo(id:Int!):String!
    }
    input TodoInput{
        title:String
        completed:Boolean
    }
    `;

export default typeDefs;
