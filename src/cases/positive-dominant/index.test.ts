import positiveDominant from './index';

test('positiveDominant', () => {
    describe('positiveDominant([1, 2, 3, -4]) -> true', () => {
        expect(positiveDominant([1, 2, 3, -4])).toBe(true);
    });
    describe('positiveDominant([0, -1]) -> false', () => {
        expect(positiveDominant([0, -1])).toBe(false);
    });
    describe('positiveDominant([-1, -2, 4, 5]) -> false', () => {
        expect(positiveDominant([-1, -2, 4, 5])).toBe(false);
    });
});
