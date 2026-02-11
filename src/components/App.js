
import React, { useState } from 'react'
import './../styles/App.css';
import Todo from './Todo';


const App = () => {
const [tasks,setTasks] = useState([]);


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <div className='app'>
      <Todo setTasks={setTasks} />
       <ul>
          {tasks.map((todo, index) => (
            <li key={index}>{todo}
              <button onClick={()=>deleteTask(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default App
