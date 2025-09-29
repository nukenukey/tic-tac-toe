import type { Player } from "./Board";

export default function choose_last_available(squares: Player[]): number {
    for (let i: number = squares.length - 1; i >= 0; i--) {
        if (squares[i] === null) {
            return i;
        }
    }
    return -1;
}
