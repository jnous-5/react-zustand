import { create } from 'zustand';
import { combine } from 'zustand/middleware';

type Square = 'X' | 'O' | null;

interface GameStoreStates {
    history: Array<Array<Square>>;
    xIsNext: boolean;
}

interface GameStoreActions {
    setHistory: (
        nextHistory:
            | Array<Array<Square>>
            | ((currentHistory: Array<Array<Square>>) => Array<Array<Square>>),
    ) => void;
    setXIsNext: (
        nextXIsNext: boolean | ((currentXIsNext: boolean) => boolean),
    ) => void;
}

const useGameStore = create(
    combine<GameStoreStates, GameStoreActions>(
        { history: [Array(9).fill(null)], xIsNext: true },
        (set) => ({
            setHistory: (nextHistory) => {
                set((state) => ({
                    history:
                        typeof nextHistory === 'function'
                            ? nextHistory(state.history)
                            : nextHistory,
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
