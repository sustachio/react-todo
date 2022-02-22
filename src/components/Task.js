const Task = ({ task, toggleDone }) => {

  return (
    <div className="task">
      <input 
        type="checkbox" 
        checked={task.done}
        value={task.done} 
        onChange={() => toggleDone(task.id)}/>

      <p>{task.name}</p>
    </div>
  )
}

export default Task