import { useState } from "react"

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAddTask( text )

    setText("")
  }


  return (
  <form onSubmit={onSubmit}>

    <label>Task </label>
    <input type="text" placeholder="Add Task" 
    value={text} 
    onChange={(e) => setText(e.target.value)} />
    
    <input type="submit" value="Save Task" />
  </form>
  )
}

export default AddTask