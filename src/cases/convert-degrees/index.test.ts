import convertDegrees from './index';

test('convertDegrees', () => {
    describe('convertDegrees(\'35°C\') -> \'95°F\'', () => {
        expect(convertDegrees('35°C')).toBe('95°F');
    });
    describe('convertDegrees(\'19°F\') -> \'-7°C\'', () => {
        expect(convertDegrees('19°F')).toBe('-7°C');
    });
    describe('convertDegrees(\'39\') -> error', () => {
        expect(convertDegrees('39')).toThrow();
    });
});
