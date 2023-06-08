import React, {useState} from 'react';
import './App.css';

const App = () => {
    const [timer, setTimer] = useState(0);
    const [running, setRunning] = useState(false);
    const [pausedTime, setPausedTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
  
    const handleStart = () => {
      if (!running) {
        setRunning(true);
        const id = setInterval(() => {
          setTimer(prevTime => prevTime + 1);
        }, 500);
        setIntervalId(id);
      }
    };
  
    const handlePause = () => {
      if (running) {
        setRunning(false);
        clearInterval(intervalId);
        setPausedTime(timer);
      }
    };
  
    const handleReset = () => {
      setTimer(0);
      setRunning(false);
      clearInterval(intervalId);
      setPausedTime(0);
    };
  
    const lap = () => {
      // Implement lap functionality here
    };
  
    const handleResume = () => {
      if (!running && pausedTime > 0) {
        setRunning(true);
        const id = setInterval(() => {
          setTimer(prevTime => prevTime + 1);
        }, 500);
        setIntervalId(id);
        setPausedTime(0);
      }
    };
  
    const formatTime = () => {
      const seconds = `0${timer % 60}`.slice(-2);
      const minutes = `0${Math.floor((timer / 60) % 60)}`.slice(-2);
      const hours = `0${Math.floor(timer / 3600)}`.slice(-2);
  
      return `${hours} : ${minutes} : ${seconds}`;
    };

  return (
    <div className="container">
      <div className="timer-Display">
         {/* {time} */}
         {formatTime()}
      </div>
      {/* <ul className="laps"></ul> */}
      <div className="buttons">
        <button className="startTimer" onClick={handleStart}>Start</button>
        <button className="pauseTimer" onClick={handlePause}>Pause</button>
        <button className="resetTimer" onClick={handleReset}>Reset</button>
        <button className="restartTimer" onClick={handleResume}>Resume</button>
        {/* <button className="lap" onclick={lap}>Lap</button> */}
        {/* <button className="resetLap" onclick={resetLap}>Reset Lap</button> */}

      </div>
    </div>
  );
}

export default App;
