import { CheckBox, Delete, Edit } from '@mui/icons-material'
import React, { useState } from 'react'
import "./Todo.css"
import { inputClasses } from '@mui/material'

function ToDo() {
  const [input, setInput] = useState("")
  const [tasks, setTasks] = useState([])
  const [edit, setEdit] = useState(0)
  const [complete, setComplete] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    if (edit !== false) {
      tasks[edit] = input
      setEdit(false)
    } else setTasks([...tasks, input])
    setInput('')
  }

  function handleDelete(e, index) {
    e.preventDefault()
    setTasks(tasks.filter((task, id) => {
      return id !== index
    }))
  }

  function handleEdit(e, index) {
    e.preventDefault()
    setInput(tasks[index])
    setEdit(index)
  }

  function handleCompleted(e, index) {
    e.preventDefault()

  }


  return (
    <div className='wrapper'>
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit} >
        <input tyep="text" placeholder="Enter Name"
          value={input}
          onChange={(e) => setInput(e.target.value)} />
        <button tyep="Add">Add</button>

      </form>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li className={complete.includes(index) ? 'complete' : ''} key={index}>{task}
              <a href='/' onClick={(e) => handleDelete(e, index)}><Delete /></a>
              <a href='#' onClick={(e) => handleEdit(e, index)}><Edit /></a>
              <a href='/' onClick={(e) => handleCompleted(e, index)}><CheckBox /></a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ToDo 
