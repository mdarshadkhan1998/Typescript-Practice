import './App.css';
import useTimeout from './Components/useTimeout';
function App() {
  const delay = useTimeout(3)
  

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
