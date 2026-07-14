"use strict";
// Object type
let user = {
    name: "Shiva",
    age: 22,
    id: 1
};
let laptop = {
    name: "MSI",
    price: 63000,
    getDiscount(percent) {
        return this.price * (percent / 100);
    }
};
const updateChai = (updates) => {
    console.log("Updating chai with", updates);
};
updateChai({ name: "Masala Chai", price: 30 });
updateChai({});
updateChai({ isHot: true });
const placedOrder = (order) => {
    console.log(order);
};
placedOrder({ name: "Normal Chai", quantity: 3 });
const chaiInfo = {
    name: "Masala Chai",
    price: 30
};
