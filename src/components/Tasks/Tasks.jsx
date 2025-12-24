import React, { useContext } from 'react'
import "./Tasks.css"
import { AppContext } from '../../context/AppContext'
import Task from '../Task/Task';

const Tasks = () => {

  const {tasks} = useContext(AppContext);

  return (
    <div className='tasks'>
      {tasks.map((t) => {
        return (
          <div key={t.id}>
            <Task text={t.text} checked={t.checked} id={t.id} edit={t.edit}/>
          </div>
        )
      })}
    </div>
  )
}

export default Tasks
