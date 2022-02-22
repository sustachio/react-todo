import Task from "./Task"

const Tasks = ({ tasks, clearDone, toggleDone }) => {

  return (
    <div>
      {tasks.map((task, i) => (
        <Task key={i} task={task} toggleDone={toggleDone} />
      ))}
      
      <p className="fake-link" onClick={clearDone}>Clear completed tasks</p>
    </div>
  )
}

export default Tasks