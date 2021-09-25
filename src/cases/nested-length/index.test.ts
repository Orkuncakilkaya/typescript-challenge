import nestedLength from './index';

test('nestedLength', () => {
    describe('nestedLength([1, 2, [3]]) -> 3', () => {
        expect(nestedLength([1, 2, [3]])).toBe(3);
    });
    describe('nestedLength([[1], [2], [3]]) -> 3', () => {
        expect(nestedLength([[1], [2], [3]])).toBe(3);
    });
    describe('nestedLength([[1, 1], [2, 2], [3, 3]]) -> 6', () => {
        expect(nestedLength([[1, 1], [2, 2], [3, 3]])).toBe(6);
    });
    describe('nestedLength([[1, [2, 3, [4]], [5, [6, [7, [8, [9]]]]], [10, 11]]) -> 11', () => {
        expect(nestedLength([1, [2, 3, [4]], [5, [6, [7, [8, [9]]]]], [10, 11]])).toBe(11);
    });
});
