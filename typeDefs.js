const typeDefs = ` #graphql
    type Query{ #root entry points
        hello:String
        users: [ User !]!
        user(id:Int!): User
        todos: [Todo]!
        todo(id:Int!):Todo

    }
    type Mutation{
        addTodo(todo:TodoInput!,userId:Int!): Todo
        deleteTodo(id:Int!):String
        updateTodo(id:Int!,todo:TodoInput!):Todo
    }

    input TodoInput{
        title:String
        completed:Boolean
    }
    type User{
        id:Int!
        email:String
        name:String
        todos:[Todo]
    }

    type Todo{
        id:Int
        title:String
        completed:Boolean
        user:User
    }
`;

export default typeDefs
