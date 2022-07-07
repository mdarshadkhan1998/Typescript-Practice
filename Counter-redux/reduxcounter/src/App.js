import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { incNumber,decNumber } from './components/actions/action';
function App() {

  const count = useSelector((state)=>state.count)
  const dispatch = useDispatch()
console.log(count)
  return (
    <div className="App">
    <button onClick={()=>dispatch(incNumber(5))}>+</button>
    {count}
    <button onClick={()=>dispatch(decNumber())}>-</button>
    </div>
  );
}

export default App;
