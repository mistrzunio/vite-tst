# PacMan Vite React

This project is a web browser-based PacMan game developed using React and Vite. Below are the details for setting up and running the game.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd pacman-vite-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the game.

## Project Structure

- `index.html`: The main HTML file that serves as the entry point for the application.
- `package.json`: Configuration file for npm, listing dependencies and scripts.
- `tsconfig.json`: TypeScript configuration file.
- `vite.config.ts`: Vite configuration file.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `README.md`: Documentation for the project.
- `public/favicons`: Directory containing favicon files.
- `src`: Contains the source code for the application.
  - `main.tsx`: Entry point for the React application.
  - `App.tsx`: Main App component managing game state.
  - `styles/globals.css`: Global CSS styles.
  - `components`: Contains React components for the game.
  - `hooks`: Custom hooks for game logic.
  - `systems`: Functions for input handling, movement, and collision detection.
  - `utils`: Utility functions for mathematical calculations.
  - `types`: TypeScript types and interfaces.
  - `assets/sprites`: Directory for sprite images.
- `test`: Contains tests for the application.
  - `vitest.setup.ts`: Setup for the testing environment.
  - `components/GameBoard.spec.tsx`: Tests for the GameBoard component.

## Game Details

The game features:
- A playable PacMan character controlled by the user.
- Ghost characters that chase PacMan.
- A scoring system based on collected items.
- Collision detection between characters and walls.

Feel free to explore the code and contribute to the project!