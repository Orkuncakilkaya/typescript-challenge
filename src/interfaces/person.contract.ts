export enum Gender {
    MALE,
    FEMALE,
}

export interface PersonConstructorParams {
    name: string;
    age: string;
    gender: Gender;
}

export interface PersonContract {
    olderThan(person: PersonContract): boolean;

    youngerThan(person: PersonContract): boolean;

    sameSexWith(person: PersonContract): boolean;

    namesakeWith(person: PersonContract): boolean;
}
