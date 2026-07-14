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


//! Partial
type Chai = {
    name: string
    price: number
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => {
    console.log("Updating chai with", updates);
}

updateChai({name: "Masala Chai", price: 30})
updateChai({})
updateChai({isHot: true})


//! Required
type ChaiOrder = {
    name?: string
    quantity?: number
}

const placedOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}

placedOrder({name: "Normal Chai", quantity: 3})