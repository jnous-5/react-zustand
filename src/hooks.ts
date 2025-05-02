import { create } from 'zustand';
import { combine } from 'zustand/middleware';

type Square = 'X' | 'O' | null;

interface GameStoreStates {
    history: Array<Array<Square>>;
    currentMove: number;
}

interface GameStoreActions {
    setHistory: (
        nextHistory:
            | Array<Array<Square>>
            | ((currentHistory: Array<Array<Square>>) => Array<Array<Square>>),
    ) => void;
    setCurrentMove: (
        nextCurrentMove: number | ((currentMove: number) => number),
    ) => void;
}

const useGameStore = create(
    combine<GameStoreStates, GameStoreActions>(
        { history: [Array(9).fill(null)], currentMove: 0 },
        (set) => ({
            setHistory: (nextHistory) => {
                set((state) => ({
                    history:
                        typeof nextHistory === 'function'
                            ? nextHistory(state.history)
                            : nextHistory,
                }));
            },
            setCurrentMove: (nextCurrentMove) => {
                set((state) => ({
                    currentMove:
                        typeof nextCurrentMove === 'function'
                            ? nextCurrentMove(state.currentMove)
                            : nextCurrentMove,
                }));
            },
        }),
    ),
);

export { useGameStore };
