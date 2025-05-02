import { JSX } from 'react';
import { useGameStore } from 'src/hooks';
import Square from 'src/Square';
import { calculateStatus, calculateTurns, calculateWinner } from 'src/utils';

export default function Board(): JSX.Element {
    const xIsNext = useGameStore((state) => state.xIsNext);
    const setXIsNext = useGameStore((state) => state.setXIsNext);

    const squares = useGameStore((state) => state.squares);
    const setSquares = useGameStore((state) => state.setSquares);

    const winner = calculateWinner(squares);
    const turns = calculateTurns(squares);

    const player = xIsNext ? 'X' : 'O';

    const status = calculateStatus(winner, turns, player);

    const handleClick = (i: number): void => {
        if (squares[i] || winner) return;

        const nextSquares = squares.slice();
        nextSquares[i] = player;

        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    };

    return (
        <>
            <div style={{ marginBottom: '0.5rem' }}>{status}</div>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gridTemplateRows: 'repeat(3, 1fr)',
                    width: 'calc(3 * 2.5rem)',
                    height: 'calc(3 * 2.5rem)',
                    border: '1px solid #999',
                }}
            >
                {squares.map((square, squareIndex) => (
                    <Square
                        key={squareIndex}
                        onSquareClick={() => handleClick(squareIndex)}
                        value={square}
                    />
                ))}
            </div>
        </>
    );
}
