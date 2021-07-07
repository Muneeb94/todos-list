import React from 'react'

const Todo = ({todo , onDelete}) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
            <small>{todo.sno}</small>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Todo
