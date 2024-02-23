import './App.css';
import react, {useState} from 'react';

function App() {

const [count, setCount] = useState(0);

const incCount = () => {
  setCount(count + 1);
  console.log(count);
}

  return (
    <div>
      <input type="text" placeholder='Team1'></input>
      <input type="text" placeholder='Team2'></input>
      <input type="button" onClick={ incCount }></input>
    </div>
  );  
}

export default App;