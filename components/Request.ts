import { Player } from './Board';
import axios from 'axios';

async function send(squares: Player[]): number{
    const outgoing: string = squares.map((square) => {
        if (square === null)
            return 'n'
        else
            return square.toLowerCase();
    }).join(',');
    console.log(outgoing);

    const resp = await axios.get('http://localhost:3000/board?board=' + outgoing + '&player=x');
    return resp.data.next;
}

export default send;
