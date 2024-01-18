import { Add_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/actionTypes";


const initialState=[];


const todoReducer=(state=initialState, action)=>{
     switch(action.type){
       case Add_TODO: 
       return [...state, action.payload];
        
       case DELETE_TODO:
        return state.filter(todo => todo.id!==action.payload);

        case UPDATE_TODO:
                  return state.map(item=>{
                    if(item.id!==action.updateId){
                  return item;
                    }
                    item.taskName=action.updatedName;
                    return item;
                    
                  });

        default: return state;

     }

}


 export default todoReducer;