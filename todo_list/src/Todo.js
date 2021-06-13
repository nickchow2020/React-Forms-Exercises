import React from "react"
import "./Todo.css"
const Todo = ({todo,removeTodo})=>{

    const deleteTodo = ()=>{
        removeTodo(todo)
    }

    return (
        <div>
            <h3>{todo}<button onClick={deleteTodo} className="btn">X</button></h3>
        </div>
    )
}

export default Todo