// Type alias
type Point = {
    x: number
    y: number
}

let point: Point = { x: 10, y: 20}


// Type alias for primitives
type ID = string | number

let userID: ID = "Shiva"
let productID: ID = 2



//! 
// interface Animal {
//     name: string
// }

// interface Dog extends Animal {
//     breed: string
// }

// let myDog: Dog = {
//     name: "Buddy",
//     breed: "Pit Bull"
// }


//! 
interface Animal {
    name: string
}

interface Animal {
    age: number
}

let dog: Animal = {
    age: 3,
    name; "Pit Bull"
}