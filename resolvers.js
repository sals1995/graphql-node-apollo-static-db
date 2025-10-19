import { Todos, Users } from "./_db.js";

const resolvers = {
  Query: {
    hello: () => {
      return "Hi";
    },
    users() {
      return Users;
    },
    user(_, arg) {
      console.log(arg);
      return Users.find((user) => user.id === arg.id);
    },
    todos() {
      return Todos;
    },
    todo(_, { id }) {
      return Todos.find((todo) => todo.id === id);
    },
  },
  Todo: {
    user(parent) {
      return Users.find((user) => user.id == parent.userId);
    },
  },
  User: {
    todos(parent) {
      return Todos.filter((todo) => todo.userId == parent.id);
    },
  },
  Mutation: {
    addTodo(_, { todo, userId }) {
    //   console.log("args: ", args);
      let newTodo = { 
        ...todo, userId ,
        id:Todos[Todos.length-1].id +1
      };
      Todos.push(newTodo)
      return newTodo
    },
    deleteTodo(_,{id}){
       let index= Todos.findIndex(todo=>todo.id==id)
       if(index!=-1)
       {
        Todos.splice(index,1)
        return "deleted successfully"
       }
       else{
        return "Can't delete todo"
       }
    },
    updateTodo(_,{id,todo}){
    //    let index= Todos.findIndex(todo=>todo.id==id)
    //    if(index!=-1){
    //     Todos[index]={ ...Todos[index],...todo}
    //    }
        let oldTodo=Todos.find(todo=>todo.id==id)
        let newTodo={...oldTodo,...todo}
        Object.assign(oldTodo,newTodo)
        return newTodo
    }
  },
};

export default resolvers;
