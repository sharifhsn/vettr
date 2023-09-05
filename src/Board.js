import React, { useRef, useState } from "react";

import "./Board.css"

const TIME = 3;

const Board = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    
    const [squareVisible, setSquareVisible] = useState(false);
    const [gameIsStarted, setGameIsStarted] = useState(false);
    const [time, setTime] = useState(0);
    const [score, setScore] = useState(0);

    const intervalRef = useRef(null);

    const startGame = () => {
        setGameIsStarted(true);
        generateSquare();
        startTimer();
        setScore(0);
    }

    const stopGame = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;      
        setGameIsStarted(false);
        setSquareVisible(false);
        setTime(0);
    }

    const startTimer = () => {
        const start = Date.now();
        intervalRef.current = setInterval(() => {
            let delta = Date.now() - start;
            setTime(Math.floor(delta / 1000));
            if (Math.floor(delta / 1000) >= TIME) {
                stopGame();
            }
        }, 100);
    }

    const generateSquare = () => {
        setSquareVisible(true);
        setX(Math.random() * 1200);
        setY(Math.random() * 800);
    }

    const squareClicked = () => {
        setSquareVisible(false);
        setScore(score + 1);
        generateSquare();
    }

    return (
        <div>
            <button onClick={startGame} disabled={gameIsStarted}>Start Game</button>
            <button onClick={stopGame} disabled={!gameIsStarted}>Stop Game</button>

            <p>Time: {TIME - time}</p>
            <p>Score: {score}</p>
            {
                squareVisible && 
                <button
                    style={{ position: 'absolute', left: x + 'px', top: y + 'px' }}
                    className="square"
                    onClick={squareClicked}>
                </button>
            }

        </div>
    )
}

export default Board;