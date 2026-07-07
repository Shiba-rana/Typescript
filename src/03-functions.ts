// 
function add(a: number, b: number): number {
    return a + b
}

// 
function greet(name: string, greeting?: string): string {
    if(greeting) {
        return `${greeting}, ${name}`
    }
    return `Hello ${name}`
}

// Default parameter
function mul(a: number, b: number = 1): number {
    return a * b
}

// Rest parameter
function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
}

// Arrow function
const divide = (a: number, b: number): number => a / b

// function types
let calculate: (x: number, y: number) => number
calculate = add