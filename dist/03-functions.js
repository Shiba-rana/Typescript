"use strict";
// 
function add(a, b) {
    return a + b;
}
// 
function greet(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}`;
    }
    return `Hello ${name}`;
}
// Default parameter
function mul(a, b = 1) {
    return a * b;
}
// Rest parameter
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
// Arrow function
const divide = (a, b) => a / b;
// function types
let calculate;
calculate = add;
