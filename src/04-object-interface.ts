// Interface
interface User {
    name: string
    age: number
    email?: string  // optional property
    readonly id: number  // readonly property
}

// Object type
let user: User = {
    name: "Shiva",
    age: 22,
    id: 1
}


//! Interface with methods
interface Product {
    name: string
    price: number
    getDiscount(percent: number): number
}

let laptop: Product = {
    name: "MSI",
    price: 63000,
    getDiscount(percent: number): number {
        return this.price * (percent / 100)
    }
}