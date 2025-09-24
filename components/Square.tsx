type Player = "X" | "O" | "neither of you" | null;

function Square({
    value,
    onClick,
    winner,
}: {
    winner: Player;
    onClick: () => void;
    value: Player;
}) {
    if (!value) {
        return <button className="square" onClick={onClick} disabled={Boolean(winner)}>hi</button>;
    }
    return <button className={`square square_${value.toLowerCase()}`} disabled>{value}</button>;
}
export default Square;
