import createComponent from './index';
import {ComponentType} from '../../interfaces/composite.contract';

test('composite', () => {
    describe('composite plus', () => {
        const composite = createComponent({type: ComponentType.PLUS});
        composite.addChild(createComponent({value: 2}));
        composite.addChild(createComponent({value: 3}));
        expect(composite.operate()).toBe(5);
    });
    describe('composite minus', () => {
        const composite = createComponent({type: ComponentType.MINUS});
        composite.addChild(createComponent({value: 2}));
        composite.addChild(createComponent({value: 3}));
        expect(composite.operate()).toBe(-1);
    });
    describe('composite divide', () => {
        const composite = createComponent({type: ComponentType.DIVIDE});
        composite.addChild(createComponent({value: 12}));
        composite.addChild(createComponent({value: 3}));
        expect(composite.operate()).toBe(4);
    });
    describe('composite multiply', () => {
        const composite = createComponent({type: ComponentType.MULTIPLY});
        composite.addChild(createComponent({value: 9}));
        composite.addChild(createComponent({value: 10}));
        expect(composite.operate()).toBe(90);
    });
    describe('composite plus(minus)', () => {
        const plusComposite = createComponent({type: ComponentType.PLUS});
        plusComposite.addChild(createComponent({value: 100}));

        const minusComposite = createComponent({type: ComponentType.MINUS});
        minusComposite.addChild(createComponent({value: 10}));
        minusComposite.addChild(createComponent({value: 5}));

        plusComposite.addChild(minusComposite);

        expect(plusComposite.operate()).toBe(105);
    });
    describe('composite plus(minus(multiply))', () => {
        const plusComposite = createComponent({type: ComponentType.PLUS});
        plusComposite.addChild(createComponent({value: 100}));

        const minusComposite = createComponent({type: ComponentType.MINUS});
        minusComposite.addChild(createComponent({value: 10}));

        const multiplyComposite = createComponent({type: ComponentType.MULTIPLY});
        multiplyComposite.addChild(createComponent({value: 2}));
        multiplyComposite.addChild(createComponent({value: 3}));

        minusComposite.addChild(multiplyComposite);
        plusComposite.addChild(minusComposite);

        expect(plusComposite.operate()).toBe(104);
    });
    describe('composite plus(minus(multiply(divide)))', () => {
        const plusComposite = createComponent({type: ComponentType.PLUS});
        plusComposite.addChild(createComponent({value: 100}));

        const minusComposite = createComponent({type: ComponentType.MINUS});
        minusComposite.addChild(createComponent({value: 10}));

        const multiplyComposite = createComponent({type: ComponentType.MULTIPLY});
        multiplyComposite.addChild(createComponent({value: 2}));

        const divideComposite = createComponent({type: ComponentType.DIVIDE});
        divideComposite.addChild(createComponent({value: 12}));
        divideComposite.addChild(createComponent({value: 4}));

        multiplyComposite.addChild(divideComposite);
        minusComposite.addChild(multiplyComposite);
        plusComposite.addChild(minusComposite);

        expect(plusComposite.operate()).toBe(104);
    });
});
