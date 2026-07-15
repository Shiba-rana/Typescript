//!
// class Chaicls {
//     flavor: string;
//     price: number;

//     constructor(flavor: string, price: number) {
//         this.flavor = flavor
//         this.price = price
//     }
// }

// const masalaChai = new Chaicls("Normal", 20)


//!
// class Chai {
//     public flavor: string = "Masala"
//     private secretIngridients: string = "Cardamom"

//     reveal() {
//         return this.secretIngridients
//     }
// }

// class Shop {
//     protected shopName: string = "Chaiwala"
// }

// class Branch extends Shop {
//     getName() {
//         return this.shopName
//     }
// }


//!
// class walet {
//     #balance = 100000

//     getBalance() {
//         return this.#balance
//     }
// }

// const w = new walet()


//!
// class Cup {
//     readonly capacity: number = 250

//     constructor(capacity: number) {
//         this.capacity = capacity
//     }
// }


//!
// class ModernChai {
//     private _sugar = 2

//     get sugar() {
//         return this._sugar
//     }

//     set sugar(value: number) {
//         if(value > 5) throw new Error("Too sweet!");

//         this._sugar = value
//     }
// }
// const m = new ModernChai()
// m.sugar = 3


//! Static
// class EkChai {
//     static shopName = "Chai"

//     constructor(flavor: string) {}
// }

// console.log(EkChai.shopName);


//! Abstract
// abstract class Drink {
//   abstract make(): void;
// }

// class Chai extends Drink {
//   make() {
//     console.log("Drink Chai");
//   }
// }


//! Composition
class Heater {
    heat() {}
}

class ChaiMaker {
    constructor(private heater: Heater) {}

    make() {
        this.heater.heat
    }
}