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
    document.getElementById("status").value += "Basket made by the Guests \n";
  } else {
    document.getElementById("status").value += "Guets miss the basket \n";
  }
  setTeam1btnState(true);
  setTeam2btnState(false);
}

function btn2click() {
  if(Math.floor(Math.random() * 11) >= 5) {
    incCountT2();
    document.getElementById("status").value += "Basket made by the home team \n";
  } else {
    document.getElementById("status").value += "Home team miss the basket \n";
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

let progressWidth = 250;
let size = 50;
  return (
    <div>
      <div className='flex-container'>
        <div className='flex-item'>
          <p className='flex-item'>Guest</p>
          <input className='flex-item' id='team1' type="text" placeholder='Team1'></input>
          <button className='flex-item' id='team1btn' type="button" style={{width: size, height: size}} onClick={btn1click} disabled={team1btnState || countT1 >= 12 || countT2 >= 12} placeholder='Points Team1'>Shoot</button>
          <p className='flex-item'>Points {countT1}</p>
          <div className='flex-item' id='progress1Bg' style={{width: progressWidth , height: '20px', backgroundColor: 'grey'}}>
            <div id='progress2' style={{width: progressWidth/12*countT1 , height: '20px', backgroundColor: 'lightblue'}}></div>
          </div>
        </div>
        <div className='flex-item' style={{width: progressWidth}}>
          <h4 className='flex-item' id='result'></h4>
          <p>Status</p>
          <textarea readOnly id='status' className='output'></textarea>
        </div>
        <div className='flex-item'>
          <p className='flex-item'>Home</p>
          <input className='flex-item' id='team2' type="text" placeholder='Team2'></input>
          <button className='flex-item' id='team2btn' type="button" style={{width: size, height: size}} onClick={btn2click} disabled={team2btnState || countT1 >= 12 || countT2 >= 12} placeholder='Points Team2'>Shoot</button>
          <p className='flex-item'>Points {countT2}</p>
          <div className='flex-item' id='progress2Bg' style={{width: progressWidth , height: '20px', backgroundColor: 'grey'}}>
            <div id='progress1' style={{width: progressWidth/12*countT2 , height: '20px', backgroundColor: 'lightblue'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;