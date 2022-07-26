import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';

const Todo = () => {
    const [text, Settext] = useState("");
    const [list, setList] = useState([]);
    
    useEffect(()=>{
        getData()
    },[])
    
    const handleSubmit = (event) => {
        event.preventDefault();
        var data = {
            name:text
        }
        axios.post('http://localhost:8080/todo',data).then(()=>getData())
        Settext("")
    }
    
    const getData = () => {
        axios.get("http://localhost:8080/todo").then((res)=>setList(res.data))               
    }

    const handleDelete = (e) => {
        axios.delete(`http://localhost:8080/todo/${e}`).then(()=>getData())
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={text} onChange={(e) => Settext(e.target.value)} placeholder='enter todo'
                />
                <input type='submit' value='ADD TODO' />
            </form>
            {
                list.map((element,index)=><TodoList key={index} apnaData = {{...element, handleDelete, getData}} />)
            }
        </div>
    )
}

export default Todo