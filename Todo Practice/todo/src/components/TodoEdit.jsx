import React, { useState } from 'react'
import axios from 'axios'

const TodoEdit = (d) => {
    const {id,setToggle, getData} = d.props
    const [text, Settext] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        var data = {
            name:text
        }
        axios.patch(`http://localhost:8080/todo/${id}`,data).then(()=>getData())
        Settext("")
        setToggle(true)
    } 
    return (
        <div>
            <form onSubmit={handleSubmit} style={{margin:'30px 0px 20px 0px',display:'flex', gap:'20px'}}>
                <input type='text' value={text} onChange={(e) => Settext(e.target.value)} style={{width:'200px'}} placeholder='enter todo'
                />
                <input type='submit' value='ADD TODO'  style={{width:'100px', height:'30px'}}/>
                <button onClick={()=>setToggle(true)} style={{width:'100px', height:'30px'}}>Cancel</button>
            </form>
        </div>
    )
}

export default TodoEdit