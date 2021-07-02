import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div className="container">
       <h3>Todo List</h3>
       <Todo todo={props.todoItems[0]}/>
    </div>
  )
}

export default Todos
