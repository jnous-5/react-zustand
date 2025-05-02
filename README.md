# React Tic-tac-toe with Zustand

A Tic-tac-toe game built with React, TypeScript, and Zustand for state management.

This app serves as an activity to demonstrate the usage of Zustand to manage global states.

Guide: https://zustand.docs.pmnd.rs/guides/tutorial-tic-tac-toe

## Features

- Lets you play tic-tac-toe
- Indicates when a player has won the game or when is drawn
- Stores a game’s history as a game progresses
- Allows players to review a game’s history and see previous versions of a game’s board

## Getting Started

### Prerequisites

Before getting started, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [VSCode](https://code.visualstudio.com/) with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Installation

```sh
# Clone the repository
git clone https://github.com/jnous-5/react-zustand.git

# Install dependencies
yarn install
```

### Development

```sh
# Start development server
yarn dev
```

Open `http://127.0.0.1:5173` in your browser to play the game.

### Build

```sh
# Build for production
yarn build

# Preview production build
yarn preview
```

## Project Structure

- `src/Game.tsx` - Main game component
- `src/Board.tsx` - Game board component
- `src/Square.tsx` - Individual square component
- `src/hooks.ts` - Zustand store and game logic
- `src/utils.ts` - Utility functions for game rules

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn typecheck` - Run TypeScript type checking
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier

## Technologies

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Vite](https://vitejs.dev/)
