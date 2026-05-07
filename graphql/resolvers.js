import { TODOS, USERS } from "../data/_db.js";

const resolvers = {
    Query: {
        welcome: () => {
            return "hello";
        },
        users:()=>{
            return USERS
        },
        user:(_,arg)=>{
            return USERS.find(user=> user.id==arg.id)           
        },
        todos(){
            return TODOS
        },
        todo(_,{id}){
            return TODOS.find(todo=> todo.id == id)
        }

    },
    Todo:{
        user(parent){
            return USERS.find(user=> user.id== parent.userId)
        }
    },
    User:{
        todos:(parent)=>{
            return TODOS.filter(todo=> todo.userId==parent.id)
        }
    },
    Mutation:{
        addTodo:(_,{todo,userId})=>{
            let newTodo={ ...todo,id:TODOS[TODOS.length-1].id+1 ,userId}
            TODOS.push(newTodo)
            return newTodo
        },
        updateTodo(_,{id,todo,userId}){
            // let index= TODOS.findIndex(todo=> todo.id==id)
            // if(index!=-1){
            //     TODOS[index]= {...TODOS[index],...todo,userId}
            //     return TODOS[index]
            // }
            let oldTodo= TODOS.find((todo)=> todo.id==id)
            let newTodo= {...oldTodo,...todo,userId}
            Object.assign(oldTodo,newTodo)
            return newTodo
        },
        deleteTodo(_,{id}){
            let index= TODOS.findIndex((todo)=> todo.id==id)
            if(index!=-1){
                TODOS.splice( index ,1)
                return "deleted successfully"
            }
            else
                return "can't delete todo"
        }
    }
};
export default resolvers