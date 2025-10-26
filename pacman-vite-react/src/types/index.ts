export interface GameState {
    score: number;
    lives: number;
    level: number;
    grid: number[][];
    pacMan: Character;
    ghosts: Character[];
}

export interface Character {
    x: number;
    y: number;
    direction: Direction;
}

export enum Direction {
    UP = 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
}

export interface InputState {
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;
}