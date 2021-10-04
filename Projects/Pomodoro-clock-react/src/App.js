import React, { useState, useEffect, useRef } from "react";
import "./App.css";
const padTime = (time) => {
  return time.toString().padStart(2, "0");
};
function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [title, setTitle] = useState("Let the countdown begin!");
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const startTimer = () => {
    if (intervalRef.current !== null) return;
    setTitle("You are doing great!");
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft > 0) return timeLeft - 1;
        resetTimer();
        return 0;
      });
    }, 1000);
  };
  const stopTimer = () => {
    if (intervalRef.current === null) return;
    setTitle("Keep it going!");
    setIsRunning(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  const resetTimer = () => {
    setTitle("Ready for another round!");
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimeLeft(25 * 60);
    setIsRunning(false);
  };
  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);
  return (
    <div className="App">
      <div className="text-center">
        <h1 className="mb-5">Pomodoro Clock</h1>
        <div className="clock">
          <h1 className="my-5">
            {minutes}:{seconds}
          </h1>
          {!isRunning && (
            <button className="btn btn-color mx-3 my-4" onClick={startTimer}>
              Start
            </button>
          )}
          {isRunning && (
            <button className="btn btn-color mx-3 my-4" onClick={stopTimer}>
              Stop
            </button>
          )}
          <button className="btn btn-color mx-3 my-4" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
