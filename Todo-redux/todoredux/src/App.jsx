import { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';
import { getTodo } from './components/api/todoRequests'
import { useDispatch } from 'react-redux'


function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getTodo())
},[])
  return (
    <div className="App">
      <Todo/>
    </div>
  );
}

export default App;
