import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import HUD from './components/HUD';

const App: React.FC = () => {
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const handleGameOver = () => {
        setGameOver(true);
    };

    return (
        <div>
            <HUD score={score} gameOver={gameOver} />
            <GameBoard onGameOver={handleGameOver} setScore={setScore} />
        </div>
    );
};

export default App;