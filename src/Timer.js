import React, { useState, useEffect } from "react";

const Timer = () => {
    const [startTime, setStartTime] = useState(null);
    const [intervalId, setIntervalId] = useState(null);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isDone, setIsDone] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const startTimer = () => {
        setIsStarted(true);
        const now = performance.now();
        setStartTime(now);

        const id = setInterval(() => {
            const currentTime = performance.now();
            setElapsedTime(currentTime - startTime);
            if (elapsedTime > 60000) {
                setIsDone(true);
            }
        }, 50);

        setIntervalId(id);
    }
    return (
        <div>
            <p>{isDone ? (
                0
            ) : (
                (60000 - elapsedTime) / 1000
            )}</p>
            <button onClick={startTimer} disabled={isStarted}>Start</button>
        </div>
    );
}

export default Timer;