import whoLeft from './index';

test('whoLeft', () => {
    describe('whoLeft([1, 2, 3], [1, 3]) -> 2', () => {
        expect(whoLeft([1, 2, 3], [1, 3])).toBe(2);
    });
    describe('whoLeft([\'orkun\', \'eray\', \'eray\', \'ahmet\'], [\'orkun\', \'eray\', \'ahmet\']) -> \'eray\'', () => {
        expect(whoLeft(['orkun', 'eray', 'eray', 'ahmet'], ['orkun', 'eray', 'ahmet'])).toBe('eray');
    });
});
