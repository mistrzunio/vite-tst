import React from 'react';

interface GhostProps {
  x: number;
  y: number;
  color: string;
}

const Ghost: React.FC<GhostProps> = ({ x, y, color }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        width: '30px',
        height: '30px',
        backgroundColor: color,
        borderRadius: '50%',
      }}
    />
  );
};

export default Ghost;