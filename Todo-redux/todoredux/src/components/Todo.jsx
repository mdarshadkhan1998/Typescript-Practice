import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addingTodo } from './redux/actions/action';
import { getTodo, createNewTodo, updateTodo, deleteTodo } from './api/todoRequests'

const Todo = () => {
    const dispatch = useDispatch();
    const Todo = useSelector((state) => state.Todo)
    const [todo, setTodo] = useState("");
    const [edit, setEdit] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createNewTodo(todo))
        setTodo("")
    }
    // console.log(Todo)

    const handleEdit = (e) => {
        console.log(e)
        // setEdit(true)
    }

    const handleDelete = (e) => {
        // console.log(e.id)
        dispatch(deleteTodo(e.id))
    }


    return (
        <div>
            <h1>TODO LIST</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} placeholder="Enter Todo..." onChange={(e) => setTodo(e.target.value)} />
            </form>
            {
                Todo.map((e) => <div key={e.id} className="ui cards" style={{ margin: "auto", justifyContent: "center" }}>
                    <div className="card">
                        <div className="content">
                            <img className="right floated mini ui image" src="https://avatars.githubusercontent.com/u/98782705?s=400&u=7ca3f4dc101b11aba506d172cbd1919fff8441d0&v=4" alt='' />
                            <div className="header">
                                {e.todo}
                            </div>
                            <div className="meta">
                                Important!!
                            </div>
                        </div>
                        {
                            edit ? (
                                <div> 
                                    {/* <input type="text" value={todo} placeholder="Enter Todo..." onChange={(e) => setTodo(e.target.value)} /> */}
                                </div>
                            ) : (
                                <div className="extra content">
                                    <div className="ui two buttons">
                                        <div className="ui basic green button" onClick={() => handleEdit(e)}>Edit</div>
                                        <div className="ui basic red button" onClick={() => handleDelete(e)}>Delete</div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default Todo