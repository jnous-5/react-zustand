import { create } from 'zustand';
import { combine } from 'zustand/middleware';

type Square = 'X' | 'O' | null;

interface GameStoreStates {
    squares: Array<Square>;
    xIsNext: boolean;
}

interface GameStoreActions {
    setSquares: (
        netSquares:
            | Array<Square>
            | ((currentSquares: Array<Square>) => Array<Square>),
    ) => void;
    setXIsNext: (
        nextXIsNext: boolean | ((currentXIsNext: boolean) => boolean),
    ) => void;
}

const useGameStore = create(
    combine<GameStoreStates, GameStoreActions>(
        { squares: Array(9).fill(null), xIsNext: true },
        (set) => ({
            setSquares: (nextSquares) => {
                set((state) => ({
                    squares:
                        typeof nextSquares === 'function'
                            ? nextSquares(state.squares)
                            : nextSquares,
                }));
            },
            setXIsNext: (nextXIsNext) => {
                set((state) => ({
                    xIsNext:
                        typeof nextXIsNext === 'function'
                            ? nextXIsNext(state.xIsNext)
                            : nextXIsNext,
                }));
            },
        }),
    ),
);

export { useGameStore };
