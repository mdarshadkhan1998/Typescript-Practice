import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addingTodo } from './redux/action';
const Todo = () => {
    const dispatch = useDispatch();
    const Todo = useSelector((state) => state.Todo)
    const [todo, setTodo] = useState("")
    console.log(Todo)
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addingTodo(todo))
    }

  return (
    <div>
    <h1>TODO LIST</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" value={todo} placeholder="Enter Todo..." onChange={(e)=>setTodo(e.target.value)} />
    </form>
    {
        Todo.map((e)=><h6>{e}</h6>)
    }
    </div>
  )
}

export default Todo