"use strict";
class Person {
    // Properties
    name;
    age;
    email;
    // Constructor
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    // Method
    introduce() {
        return `Hye, I'm ${this.name} & I'm ${this.age} year old.`;
    }
    // Get
    getName() {
        return this.name;
    }
    // Set
    setName(name) {
        this.name = this.name;
    }
}
class Employee {
    id;
    name;
    department;
    constructor(id, name, department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    getDetails() {
        return `${this.name} works in ${this.department}`;
    }
}
let shiva = new Employee(33, "Shiva", "SDE");
console.log(shiva.getDetails());
class Manager extends Employee {
    teamSize;
    constructor(id, name, department, teamSize) {
        super(id, name, department);
        this.teamSize = teamSize;
    }
    getTeamInfo() {
        return `${this.name} manages ${this.teamSize} people`;
    }
}
