import React from 'react';

const HUD: React.FC<{ score: number }> = ({ score }) => {
    return (
        <div className="hud">
            <h1>PacMan Game</h1>
            <p>Score: {score}</p>
        </div>
    );
};

export default HUD;