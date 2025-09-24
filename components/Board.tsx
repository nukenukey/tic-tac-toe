'use client';

import { useState, useEffect } from "react";
import Square from "./Square";
type Player = "X" | "O" | "neither of you" | null;

let selected: string = "human v human";

export function getSelected(): string {
    return selected;
}

export function setSelected(select: string): void {
    selected = select;
}

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
    const [winner, setWinner] = useState<Player>(null);

    function reset() {
        setSquares(Array(9).fill(null));
        setWinner(null);
        setCurrentPlayer('X');
    }

    function setSquareVal(index: number) {
        const newData: Player[] = squares.map((val, i) => {
            if (i === index) {
                return currentPlayer;
            }
            return val;
        });
        setSquares(newData);
        if (selected === "human v computer") {
            if (calculateWinner(newData) !== null)
                return;
            let temp = false;
            const data = newData.map((val) => {
                if (!temp && val === null) {
                    temp = true;
                    return "O";
                }
                return val;
            });
            setSquares(data);
            setCurrentPlayer("X");
        } else {
            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        }
    }

    useEffect(() => {
        const w = calculateWinner(squares);
        if (w) {
            setWinner(w);
        }

        if (!w && !squares.filter((square) => !square).length) {
            setWinner('neither of you');
        }
    });

    function calculateWinner(squares: Player[]): Player {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && ((squares[a] === squares[b]) && (squares[a] === squares[c]))) {
                return squares[a];
            }
        }
        return null;
    }

    return (
        <div>
            {!winner && <p>it is {currentPlayer}s turn</p>}
            {winner && winner !== "neither of you" && <p>congrats {winner}</p>}
            {winner && winner === "neither of you" && (
                <p>congrats {winner}</p>
            )}

            <div className="grid">
                {Array(9).fill(null).map((_, ind) => {
                    return <Square
                        winner={winner}
                        key={ind}
                        onClick={() => setSquareVal(ind)}
                        value={squares[ind]}
                    />;
                })};
            </div>
            <button className="reset" onClick={reset}>reset</button>
        </div>
    );
}

export default Board;
