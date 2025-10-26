import { Vector } from '../utils/math';
import { PacMan } from '../components/PacMan';
import { Ghost } from '../components/Ghost';

export function movePacMan(pacman: PacMan, direction: Vector) {
    pacman.position.x += direction.x;
    pacman.position.y += direction.y;
}

export function moveGhost(ghost: Ghost, target: Vector) {
    const direction = {
        x: target.x - ghost.position.x,
        y: target.y - ghost.position.y,
    };

    const length = Math.sqrt(direction.x ** 2 + direction.y ** 2);
    if (length > 0) {
        ghost.position.x += (direction.x / length) * ghost.speed;
        ghost.position.y += (direction.y / length) * ghost.speed;
    }
}