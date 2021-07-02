import React from 'react'

const Todo = ({todo}) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
            <small>{todo.sno}</small>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Todo
