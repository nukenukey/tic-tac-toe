import { Player } from './Board';
const axios = require('axios').default;

export default function get(squares: Player[], currentPlayer: Player = 'o'): boolean {
    let ret: boolean = false;
    const outgoing: string = squares.map((square) => {
        if (square === null)
            return 'n'
        else
            return square.toString().toLowerCase();
    }).join();
    console.log(outgoing);
    axios.get('http://localhost:3000/board?board=' + outgoing + '&player=' + currentPlayer.toLowerCase())
        .then((response: any) => {
            ret = true;
            console.log(response);
            console.log(response.data);
            console.log(response.data.board);
        })
        .catch(() => {
            ret = false;
        });
    return ret;
}
