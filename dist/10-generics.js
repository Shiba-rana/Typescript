"use strict";
// Generics in Typescript
function identity(arg) {
    return arg;
}
let output1 = identity("Hello");
let output2 = identity(100);
// Generics with arrays
function getFirstElement(arr) {
    return arr[0];
}
let myNum = getFirstElement([1, 2, 3]);
let myName = getFirstElement(["Shiva", "SDE"]);
let stringNumberPair = {
    key: {
        name: "Shiva",
        myKey: " ",
    },
    value: 22,
};
// Generic classes
class DataStorage {
    data = [];
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data = this.data.filter((i) => i !== item);
    }
    getItem() {
        return [...this.data];
    }
}
let textStorage = new DataStorage();
textStorage.addItem("Hello");
function logLength(arg) {
    console.log(arg.length);
    return arg;
}
logLength("hello");
logLength([1, 2, 3]);
