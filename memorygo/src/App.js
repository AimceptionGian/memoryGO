import './App.css';
import react, {useState} from 'react';

function App() {

const [countT1, setCountT1] = useState(0);
const [countT2, setCountT2] = useState(0);

const incCountT1 = () => {
  if(countT1 < 12) {
    setCountT1(countT1 + 3);
    //console.log(countT2);
  } else {
    console.log('T1 hat gewonnen');
  }
}

const incCountT2 = () => {
  if(countT2 < 12) {
    setCountT2(countT2 + 3);
    //console.log(countT2);
  } else {
    console.log('T2 hat gewonnen');
  }
}

  return (
    <div>
      <p>Guest</p>
      <input id='team1' type="text" placeholder='Team1'></input>
      <input type="button" onClick={ incCountT1 } placeholder='Points Team1'></input>
      <p>{countT1}</p>
      <div id='progress1Bg' style={{width: '200px' , height: '20px', backgroundColor: 'grey'}}>
        <div id='progress2' style={{width: 200/12*countT1 , height: '20px', backgroundColor: 'lightblue'}}></div>
      </div>
      <p>Home</p>
      <input id='team2' type="text" placeholder='Team2'></input>
      <input type="button" onClick={incCountT2} placeholder='Points Team2'></input>
      <p>{countT2}</p>
      <div id='progress2Bg' style={{width: '200px' , height: '20px', backgroundColor: 'grey'}}>
        <div id='progress1' style={{width: 200/12*countT2 , height: '20px', backgroundColor: 'lightblue'}}></div>
      </div>
    </div>
  );  
}

export default App;