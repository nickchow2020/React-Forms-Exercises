import React,{useState} from "react"
import NewTodoForm from "./NewTodoForm"
import Todo from "./Todo"
import { v4 as uuid } from 'uuid';

import "./TodoList.css"

const TodoList = ()=>{

    const [todos,setTodo] = useState([])

    const addTodo = (todo)=>{
        setTodo(todos => ([...todos,todo]))
    }

    const removeTodo = (todo)=>{
        setTodo(todos => (
            todos.filter(tdo => tdo !== todo)
        ))
    }

    return (
        <div className="todoWrap">
            <div>
                <NewTodoForm addTodo={addTodo}/>
                <div>
                    {
                        todos.map(todo => <Todo 
                        todo={todo} 
                        key={uuid()}  
                        removeTodo={removeTodo}/>)
                    }
                </div>
            </div>
        </div>
    )
}


export default TodoList