import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../redux/actions/todoAction";
import { v4 as uuidv4 } from 'uuid';


const ToDoApp=()=>{

   const todoArr=useSelector(state=>state);

    const [task, setTask]=useState("");
    const [updateTaskName, setUpdateTaskName]=useState("");

   const despatch=useDispatch();

    function addTask(e){
    e.preventDefault();
    if(updateTaskName!==""){
       despatch(updateTodo({id:updateTaskName, name:task}))
      setUpdateTaskName("")
    }else{
     let todoTask={
        id:uuidv4(),
        taskName:task
     }
     despatch(addTodo(todoTask));
    
    }
    setTask("");
    }

    function deleteTask(deleteId){
         despatch(deleteTodo(deleteId))
    }

    // function updateTask(id){
    //   // despatch(updateTodo({id:id, updatedName:updateTaskName}))
    //   updateTaskName()
    // }

    return (
        <div>
      <h1> {updateTaskName!==""? "Update ToDo" : "Add ToDo"}</h1>
      <form onSubmit={addTask}>
        <input type="text" placeholder={updateTaskName!==""? "Update ToDo" : "Add ToDo"}
        value={task} 
        onChange={(e)=>setTask(e.target.value)}/>

        <button type="submit">{updateTaskName!==""? "Update ToDo" : "Add ToDo"}</button>
      </form>
      <ul>
        {
          todoArr.length>0 &&  todoArr.map(item=>(
            <li key={item.id}>{item.taskName}
            <button onClick={()=>deleteTask(item.id)}>Delete</button>
            <button onClick={()=>{
              setUpdateTaskName(item.id);
              setTask(item.taskName);
            }
        }>Update</button>
        </li> 
          ))
        }
      </ul>
    </div>
    )
}
export default ToDoApp;