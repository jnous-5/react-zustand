import { JSX } from 'react';
import Board from 'src/Board';
import { useGameStore } from 'src/hooks';

export default function Game(): JSX.Element {
    const history = useGameStore((state) => state.history);
    const setHistory = useGameStore((state) => state.setHistory);

    const xIsNext = useGameStore((state) => state.xIsNext);
    const setXIsNext = useGameStore((state) => state.setXIsNext);

    const currentSquares = history[history.length - 1];

    const handlePlay = (nextSquares: Array<'X' | 'O' | null>) => {
        setHistory(history.concat([nextSquares]));
        setXIsNext(!xIsNext);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                fontFamily: 'monospace',
            }}
        >
            <div>
                <Board
                    onPlay={handlePlay}
                    squares={currentSquares}
                    xIsNext={xIsNext}
                />
            </div>
            <div style={{ marginLeft: '1rem' }}>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}
