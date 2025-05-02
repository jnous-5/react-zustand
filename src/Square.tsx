import { JSX } from 'react';

interface SquareProps {
    onSquareClick?: () => void;
    value: 'X' | 'O' | null;
}

export default function Square({
    onSquareClick,
    value,
}: SquareProps): JSX.Element {
    return (
        <button
            onClick={onSquareClick}
            style={{
                color: '#000',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
                backgroundColor: '#fff',
                border: '1px solid #999',
                outline: 0,
                borderRadius: 0,
                fontSize: '1rem',
                fontWeight: 'bold',
            }}
        >
            {value}
        </button>
    );
}
