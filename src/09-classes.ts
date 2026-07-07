class Person {
    // Properties
    private name: string
    protected age: number
    public email: string

    // Constructor
    constructor(name: string, age: number, email: string) {
        this.name = name
        this.age = age
        this.email = email
    }

    // Method
    public introduce(): string {
        return `Hye, I'm ${this.name} & I'm ${this.age} year old.`
    }

    // Get
    public getName(): string {
        return this.name
    }

    // Set
    public setName(name: string): void {
        this.name = this.name
    }
}


class Employee {
    constructor(
        private id: number,
        public name: string,
        protected department: string
    ) {}

    getDetails(): string {
        return `${this.name} works in ${this.department}`
    }
}

let shiva = new Employee(33, "Shiva", "SDE")
console.log(shiva.getDetails());


class Manager extends Employee {
    constructor(
        id: number,
        name: string,
        department: string,
        private teamSize: number,
    ) {
        super(id, name, department)
    }

    getTeamInfo(): string {
        return `${this.name} manages ${this.teamSize} people`
    }
}