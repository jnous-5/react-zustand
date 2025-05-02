import { JSX } from 'react';
import Square from 'src/Square';
import { calculateStatus, calculateTurns, calculateWinner } from 'src/utils';

interface BoardProps {
    onPlay?: (nextSquares: Array<'X' | 'O' | null>) => void;
    squares: Array<'X' | 'O' | null>;
    xIsNext: boolean;
}

export default function Board({
    onPlay,
    squares,
    xIsNext,
}: BoardProps): JSX.Element {
    const winner = calculateWinner(squares);
    const turns = calculateTurns(squares);

    const player = xIsNext ? 'X' : 'O';

    const status = calculateStatus(winner, turns, player);

    const handleClick = (i: number): void => {
        if (squares[i] || winner) return;

        const nextSquares = squares.slice();
        nextSquares[i] = player;

        onPlay?.(nextSquares);
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
