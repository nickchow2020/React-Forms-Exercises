import React,{useState} from "react"
import "./NewTodoForm.css"

const NewTodoForm = ({addTodo})=> {
    const INITIAL_VALUE = ""
    const [todo,setTodo] = useState(INITIAL_VALUE)
    const handleChange = (e)=>{
        setTodo(
            e.target.value
        )
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        addTodo(todo)
        setTodo(INITIAL_VALUE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add New Todo</h1>
            <label>
                <input 
                name="todo" 
                id="todo" 
                placeholder="add todo" 
                value={todo}
                data-testid="todo"
                onChange={handleChange}
                />
            </label>

            <button data-testid="addTodo">Add Todo</button>
        </form>
    )
}

export default NewTodoForm