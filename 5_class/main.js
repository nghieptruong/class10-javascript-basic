export class Person {

    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    greet() {
        return `Hello ${this.name}`
    }
    // Getter
    get isAdult() {
        return this.age >= 18;
    }
};

