import React, { useContext } from 'react'
import "./AddTask.css"
import { AppContext } from "../../context/AppContext"

const AddTask = () => {

  const {open, AddTask, task, setTask} = useContext(AppContext)

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  return (
    <div className='add-task' style={{display: open === true ? "flex" : "none"}}>
      <h1>Add Task</h1>
      <textarea 
      name=""
       value={task} id="" 
       onChange={(e) => handleChange(e)}
       placeholder='add task'
       ></textarea>
      <button onClick={() => AddTask()}>Add</button>
    </div>
  )
}

export default AddTask
