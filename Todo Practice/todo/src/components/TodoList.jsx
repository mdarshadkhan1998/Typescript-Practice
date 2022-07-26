import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodoEdit from './TodoEdit';

const TodoList = (props) => {
    const [toggle, setToggle] = useState(true)
    const { name, handleDelete, id, getData } = props.apnaData;
    return (
        <div style={{ display: 'flex',alignItems:'center',justifyContent:'center', gap: '20px' }}>
            {toggle ? <>
                <h6  style={{width:'200px', height:'30px'}}>{name}</h6>
                <button onClick={() => handleDelete(id)} style={{width:'100px', height:'30px'}}>Delete</button>
                <button onClick={() => setToggle(false)} style={{width:'100px', height:'30px'}}>Edit</button>
            </> :
                <TodoEdit props={{ id, setToggle, getData }} />
            }
        </div>
    )
}

export default TodoList