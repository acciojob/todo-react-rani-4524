import React, { useState } from 'react'
 
const Todo = ({setTasks}) => {
 const [input , setInput] = useState('');
     
     const changeHandler = (e) =>{
         setInput(e.target.value);
         console.log(e.target.value)
     }
     
     const addTodos = (newTodo) =>{
         setTasks(todos => [...todos , newTodo]);
     }
 
     const submitHandler = (e) =>{
         e.preventDefault();
         addTodos(input);
     }


  return (
    <div>
          <form onSubmit={submitHandler} >
              <input type="text" placeholder='Enter Task...' value={input} onChange={changeHandler} />
              <button>Add Task</button>          
          </form>
    </div>
  )
}

export default Todo
