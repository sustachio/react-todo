import { useState } from "react"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name : "first task",
      done : false
    },
    {
      id: 2,
      name : "second task",
      done : false
    }
  ])

  // set the IDs to the correct values
  const generateIDs = (_tasks) => {
    return (
      _tasks.map((task, index) =>  (
        { ...task, id: index+1 }
      ))
    )
  }

  const clearDone = () => {
    setTasks(
      generateIDs(
        tasks.filter((task) => 
          task.done !== true
      ))
    )
  }

  // toggle the "done" state for a task with an ID
  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, done: !task.done } : task 
      )
    )
  }
  
  // add a new task
  const addTask = (task) => {
    setTasks(
      generateIDs(
        [ ...tasks, {
          id: 0,
          name : task,
          done : false
        } ]
      )
    )
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Add Task:</h2>
      <AddTask onAddTask={addTask}/>
      <h2>Tasks:</h2>
      { tasks.length > 0 ?
        <Tasks tasks={tasks} clearDone={clearDone} toggleDone={toggleDone} />
      :
        <p>No tasks to show</p>
      }
    </div>
  );
}

export default App;
