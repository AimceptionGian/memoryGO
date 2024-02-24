import './App.css';
import react, {useState} from 'react';

function App() {

const [countT1, setCountT1] = useState(0);
const [countT2, setCountT2] = useState(0);

const [team1btnState, setTeam1btnState] = useState(true);
const [team2btnState, setTeam2btnState] = useState(true);

function btn1click() {
  if(Math.floor(Math.random() * 11) >= 5) {
    incCountT1();
  }
  document.getElementById("team1btn").disabled = true;
  document.getElementById("team2btn").disabled = false;
}

function btn2click() {
  if(Math.floor(Math.random() * 11) >= 5) {
    incCountT2();
  }
  document.getElementById("team2btn").disabled = true;
  document.getElementById("team1btn").disabled = false;
}

function incCountT1() {
  setCountT1(countT1 + 3);
  if(countT1 + 3 == 12) {
    console.log('T1 hat gewonnen');
  }
} 

function incCountT2() {
  setCountT2(countT2 + 3);
  if(countT2 + 3 == 12) {
    console.log('T2 hat gewonnen');
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