import { JSX } from 'react';
import Board from 'src/Board';
import { useGameStore } from 'src/hooks';

export default function Game(): JSX.Element {
    const history = useGameStore((state) => state.history);
    const setHistory = useGameStore((state) => state.setHistory);

    const currentMove = useGameStore((state) => state.currentMove);
    const setCurrentMove = useGameStore((state) => state.setCurrentMove);

    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    const handlePlay = (nextSquares: Array<'X' | 'O' | null>): void => {
        const nextHistory = history
            .slice(0, currentMove + 1)
            .concat([nextSquares]);

        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    };

    const jumpTo = (nextMove: number): void => {
        setCurrentMove(nextMove);
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
                <ol>
                    {history.map((_, historyIndex) => {
                        const description =
                            historyIndex > 0
                                ? `Go to move #${historyIndex}`
                                : 'Go to game start';

                        return (
                            <li key={historyIndex}>
                                <button onClick={() => jumpTo(historyIndex)}>
                                    {description}
                                </button>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
}
