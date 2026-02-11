
import React from "react";
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
      {
        tasks?.map((item, index) => {
          return <div key={index}>
            <p>{item}</p>
            <button className='delete-btn' onClick={()=>deleteTask(item.id)}>Delete</button>
          </div>
        })
      }
    </div>
  )
}

export default App
