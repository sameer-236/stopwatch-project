
'use client';
import React, { useState, useEffect } from "react";
// import "./Stopwatch.css";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [run, setRun] = useState(false);

  useEffect(() => {
    let interval;
    if (run) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [run]);

  let min = Math.floor(time / 60);
  let sec = time % 60;

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <h2 className="time-display">{`${min}:${sec}`}</h2>
      <div className="buttons">
        <button onClick={() => setRun(true)}>Start</button>
        <button onClick={() => setRun(false)}>Stop</button>
        <button onClick={() => { setRun(false); setTime(0); }}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
