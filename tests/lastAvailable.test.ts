import choose_last_available from '../components/lastAvailable';

describe('zombies tests on choose_last_available function', () => {
    it ('returns -1 when given no elements', () => {
        expect(choose_last_available([])).toBe(-1); // zero
    });
    it ('returns 0 when given one element', () => {
        expect(choose_last_available([null])).toBe(0); // one
    });
    it ('returns 1 when given two elements', () => {
        expect(choose_last_available([null, null])).toBe(1); // many
    });
    it ('returns 8 when given 9 elements', () => {
        expect(choose_last_available(Array(9).fill(null))).toBe(8); // more many
    });
    it ('returns 3 when given 9 elements and last 5 are taken', () => {
        let arr = [null, null, null, null, 'X', 'O', 'O', 'X', 'O'];
        expect(choose_last_available(arr)).toBe(3);
    });
});
