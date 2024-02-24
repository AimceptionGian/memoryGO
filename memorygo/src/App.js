import './App.css';
import react, {useState} from 'react';

function App() {

const [countT1, setCountT1] = useState(0);
const [countT2, setCountT2] = useState(0);

const incCountT1 = () => {
  setCountT1(countT1 + 3);
  //console.log(countT1);
}

const incCountT2 = () => {
  setCountT2(countT2 + 3);
  //console.log(countT2);
}

  return (
    <div>
      <p>Guest</p>
      <input id='team1' type="text" placeholder='Team1'></input>
      <input type="button" onClick={ incCountT1 } placeholder='Points Team1'></input>
      <p>{countT1}</p>
      <p>Home</p>
      <input id='team2' type="text" placeholder='Team2'></input>
      <input type="button" onClick={ incCountT2 } placeholder='Points Team2'></input>
      <p>{countT2}</p>
    </div>
  );  
}

export default App;