import createPerson from './index';
import {Gender} from '../../interfaces/person.contract';

test('person', () => {
    const orkun = createPerson({name: 'Orkun', age: '25', gender: Gender.MALE});
    const rabia = createPerson({name: 'Rabia', age: '23', gender: Gender.FEMALE});
    describe('is orkun younger than rabia', () => {
        expect(orkun.youngerThan(rabia)).toBe(false);
    });
    describe('is orkun older than rabia', () => {
        expect(orkun.olderThan(rabia)).toBe(true);
    });
    describe('is rabia younger than orkun', () => {
        expect(rabia.youngerThan(orkun)).toBe(true);
    });
    describe('is rabia older than orkun', () => {
        expect(rabia.olderThan(orkun)).toBe(false);
    });
    describe('is rabia same sex with orkun', () => {
        expect(rabia.sameSexWith(orkun)).toBe(false);
    });
    describe('is rabia same sex with rabia', () => {
        expect(rabia.sameSexWith(rabia)).toBe(true);
    });
    describe('is rabia namesake with rabia', () => {
        expect(rabia.namesakeWith(rabia)).toBe(true);
    });
    describe('is rabia namesake with orkun', () => {
        expect(rabia.namesakeWith(orkun)).toBe(false);
    });
});
