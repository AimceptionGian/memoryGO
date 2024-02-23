import './App.css';
import react, {useState} from 'react';

function App() {

const [count, setCount] = useState(0);

const incCount = () => {
  setCount(count + 1)
  console.log(count);
}

  return (
    <input type="button" onClick={ incCount } placeholder='gidvhr'></input>
  );  
}

export default App;