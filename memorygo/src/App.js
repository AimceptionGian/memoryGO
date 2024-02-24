import './App.css';
import react, {useState} from 'react';

function App() {

const [countT1, setCountT1] = useState(0);
const [countT2, setCountT2] = useState(0);

const [team1btnState, setTeam1btnState] = useState(false);
const [team2btnState, setTeam2btnState] = useState(false);

function btn1click() {
  if(Math.floor(Math.random() * 11) >= 5) {
    incCountT1();
  }
  setTeam1btnState(true);
  setTeam2btnState(false);
}

function btn2click() {
  if(Math.floor(Math.random() * 11) >= 5) {
    incCountT2();
  }
  setTeam2btnState(true);
  setTeam1btnState(false);
}

function incCountT1() {
  setCountT1(countT1 + 3);
  if(countT1 + 3 == 12) {
    if(document.getElementById("team1").value.trim() === "") {
      gameWon("Team 1");
    } else {
      gameWon(document.getElementById("team1").value);
      console.log('T1 hat gewonnen');
    }
  }
} 

function incCountT2() {
  setCountT2(countT2 + 3);
  if(countT2 + 3 == 12) {
    if(document.getElementById("team2").value.trim() === "") {
      gameWon("Team 2");
    } else {
      gameWon(document.getElementById("team2").value);
      console.log('T2 hat gewonnen');
    }
  }
}

function gameWon(team) {
  document.getElementById("result").textContent = team + " has won the game!";
  setTeam1btnState(true);
  setTeam2btnState(true);
}

let progressWidth = 500;
  return (
    <div>
      <p>Guest</p>
      <input id='team1' type="text" placeholder='Team1'></input>
      <input id='team1btn' type="button" onClick={btn1click} disabled={team1btnState || countT1 >= 12 || countT2 >= 12} placeholder='Points Team1'></input>
      <p>Points {countT1}</p>
      <div id='progress1Bg' style={{width: progressWidth , height: '20px', backgroundColor: 'grey'}}>
        <div id='progress2' style={{width: progressWidth/12*countT1 , height: '20px', backgroundColor: 'lightblue'}}></div>
      </div>
      <p>Home</p>
      <input id='team2' type="text" placeholder='Team2'></input>
      <input id='team2btn' type="button" onClick={btn2click} disabled={team2btnState || countT1 >= 12 || countT2 >= 12} placeholder='Points Team2'></input>
      <p>Points {countT2}</p>
      <div id='progress2Bg' style={{width: progressWidth , height: '20px', backgroundColor: 'grey'}}>
        <div id='progress1' style={{width: progressWidth/12*countT2 , height: '20px', backgroundColor: 'lightblue'}}></div>
      </div>
      <p id='result'></p>
    </div>
  );
}

export default App;