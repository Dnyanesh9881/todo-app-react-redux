import { Add_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";


export const addTodo=(todo)=>{
     
    return {
            type:Add_TODO,
            payload:todo
        }
    
}
export const deleteTodo=(id)=>{

    return {
        type:DELETE_TODO,
        payload:id
    }
}

export const updateTodo=({id, name})=>{

return {
    type:UPDATE_TODO,
    updateId:id,
    updatedName:name
}
}