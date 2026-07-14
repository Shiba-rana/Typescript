"use strict";
//! primitives
let username = "Shiva";
let age = 22;
let isAdmin = true;
//! Array
let numbers = [1, 2, 3, 4];
let names = ["shiva", "silu"];
//! Tuple
let person = ["Shiva", 22];
//! Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Blue;
//! any
let randomValue = 10;
randomValue = "shiva";
randomValue = true;
//! unknown
let input;
input = 22;
input = "shiva";
//! void (this don't return)
function hello(message) {
    console.log(message);
}
//! null & undefined
let nullValue = null;
let undefinedValue = undefined;
