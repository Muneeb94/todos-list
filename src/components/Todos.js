import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div className="container">
       <h3 className="text-center">Todo List</h3>
        {console.log(props)}
        {  props.todoItems.length === 0 ? 'No Todos To display' :
            props.todoItems.map((todo) => {
            return <Todo todo={todo} key={todo.sno}  onDelete={props.onDelete}/>
             })
        }
    </div>
  )
}

export default Todos
