import './App.css';
import react, {useState} from 'react';

function App() {

const [countT1, setCountT1] = useState(0);
const [countT2, setCountT2] = useState(0);

const [round, setRound] = useState(1);
const [team2btn, setTeam2btn] = useState(true);

function btn1click() {
  incCountT1();
  rounds();
}

function btn2click() {
  incCountT2();
  rounds();
}

function incCountT1() {
  if(countT1 < 12) {
    setCountT1(countT1 + 3);
    //console.log(countT2);
  } else {
    console.log('T1 hat gewonnen');
  }
} 

function incCountT2() {
  if(countT2 < 12) {
    setCountT2(countT2 + 3);
    //console.log(countT2);
  } else {
    console.log('T2 hat gewonnen');
  }
}

function rounds() {
  if (round%2 > 0) {
    setTeam2btn(true);
  } else {
    setTeam2btn(false);
  }
}

let progressWidth = 500;
  return (
    <div>
      <p>Guest</p>
      <input id='team1' type="text" placeholder='Team1'></input>
      <input id='team1btn' type="button" onClick={btn1click} placeholder='Points Team1'></input>
      <p>Points {countT1}</p>
      <div id='progress1Bg' style={{width: progressWidth , height: '20px', backgroundColor: 'grey'}}>
        <div id='progress2' style={{width: progressWidth/12*countT1 , height: '20px', backgroundColor: 'lightblue'}}></div>
      </div>
      <p>Home</p>
      <input id='team2' type="text" placeholder='Team2'></input>
      <input id='team2btn' type="button" onClick={btn2click} placeholder='Points Team2'></input>
      <p>Points {countT2}</p>
      <div id='progress2Bg' style={{width: progressWidth , height: '20px', backgroundColor: 'grey'}}>
        <div id='progress1' style={{width: progressWidth/12*countT2 , height: '20px', backgroundColor: 'lightblue'}}></div>
      </div>
    </div>
  );
}

export default App;