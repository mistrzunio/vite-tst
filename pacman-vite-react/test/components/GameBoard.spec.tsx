import { render, screen } from '@testing-library/react';
import GameBoard from '../../src/components/GameBoard';

describe('GameBoard Component', () => {
  test('renders the game board', () => {
    render(<GameBoard />);
    const gameBoardElement = screen.getByTestId('game-board');
    expect(gameBoardElement).toBeInTheDocument();
  });

  test('displays the correct number of cells', () => {
    render(<GameBoard />);
    const cells = screen.getAllByTestId('game-cell');
    expect(cells.length).toBe(100); // Adjust based on your game board size
  });

  test('renders PacMan on the board', () => {
    render(<GameBoard />);
    const pacManElement = screen.getByTestId('pacman');
    expect(pacManElement).toBeInTheDocument();
  });

  test('renders ghosts on the board', () => {
    render(<GameBoard />);
    const ghostElements = screen.getAllByTestId('ghost');
    expect(ghostElements.length).toBeGreaterThan(0); // Ensure at least one ghost is rendered
  });
});