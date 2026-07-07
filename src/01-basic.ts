//! primitives
let username: string = "Shiva"
let age: number = 22
let isAdmin: boolean = true


//! Array
let numbers: number[] = [1, 2, 3, 4]
let names: string[] = ["shiva", "silu"]

//! Tuple
let person: [string, number] = ["Shiva", 22]

//! Enum
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Blue


//! any
let randomValue: any = 10
randomValue = "shiva"
randomValue = true


//! unknown
let input: unknown
input = 22
input = "shiva"


//! void (this don't return)
function hello(message: string): void {
    console.log(message);
}


//! null & undefined
let nullValue: null = null
let undefinedValue: undefined = undefined