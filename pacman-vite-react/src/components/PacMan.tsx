import React from 'react';

const PacMan: React.FC<{ x: number; y: number }> = ({ x, y }) => {
    return (
        <div
            style={{
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                width: '30px',
                height: '30px',
                backgroundColor: 'yellow',
                borderRadius: '50%',
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
        />
    );
};

export default PacMan;