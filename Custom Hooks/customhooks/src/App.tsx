import { useState } from 'react';
import './App.css';

function App() {

  const [delay, setDelay] = useState(false)

  setTimeout(()=>{
    setDelay(true)
  }, 5000)

  if(!delay){
    return <h1>loading...</h1>
  }
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
