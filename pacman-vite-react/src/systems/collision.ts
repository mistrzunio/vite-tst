export function checkCollision(rect1: DOMRect, rect2: DOMRect): boolean {
    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
}

export function handlePacManGhostCollision(pacManRect: DOMRect, ghostRect: DOMRect): boolean {
    if (checkCollision(pacManRect, ghostRect)) {
        // Handle collision logic, e.g., reset game or reduce lives
        return true;
    }
    return false;
}

export function handlePacManWallCollision(pacManRect: DOMRect, wallRect: DOMRect): boolean {
    if (checkCollision(pacManRect, wallRect)) {
        // Handle collision logic, e.g., stop movement or adjust position
        return true;
    }
    return false;
}