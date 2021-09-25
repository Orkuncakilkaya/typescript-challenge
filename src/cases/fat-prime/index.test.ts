import fatPrime from './index';

test('fatPrime', () => {
    describe('fatPrime(2,10) -> 7', () => {
        expect(fatPrime(2, 10)).toBe(7);
    });
    describe('fatPrime(10,2) -> 7', () => {
        expect(fatPrime(10, 2)).toBe(7);
    });
    describe('fatPrime(4,24) -> 23', () => {
        expect(fatPrime(4, 24)).toBe(23);
    });
});
