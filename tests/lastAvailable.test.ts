// import choose_last_available  from "./lastAvailable";
// import { Player } from "./Board";


// test("returns negative one when given empty array", () => {
//     // let foo0: Player[] = []; // zero
//     expect(choose_last_available([])).toBe(-1);
// });


// test("returns zero when given array of one element", () => {
//     const foo = [null] as Player[]; // one
//     expect(choose_last_available(foo)).toBe(0);
// });

// const foo2: Player[] = [null, null]; // many

// test("returns one when given array of two elements", () => {
//     expect(choose_last_available(foo2)).toBe(1);
// });

// import '@testing-library/jest-dom';
import choose_last_available from './lastAvailable';

describe('zombies tests on choose_last_available function', () => {
    it ('returns -1', () => {
        expect(choose_last_available([])).toBe(-1);
    });
    it ('returns 0', () => {
        expect(choose_last_available([null])).toBe(0);
    });
    it ('returns 1', () => {
        expect(choose_last_available([null, null])).toBe(1);
    });
});
