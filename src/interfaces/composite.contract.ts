export interface CompositeContract {
    addChild(component: CompositeContract): this;

    removeChild(component: CompositeContract): this;

    operate(): number;
}

export enum ComponentType {
    PLUS,
    MINUS,
    DIVIDE,
    MULTIPLY,
}

export interface ComponentConstructorParams {
    type?: ComponentType;
    value?: number;
}
