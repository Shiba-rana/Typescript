"use strict";
let updateTodo = {
    completed: true
};
let myTodo = {
    title: "Typescript",
    description: "JS",
    completed: false,
    createdAt: new Date(),
    assignedTo: "Shiva"
};
let pages = {
    home: {
        title: "Home",
        url: "/"
    },
    about: {
        title: "About",
        url: "/about"
    },
    contact: {
        title: "Contact",
        url: "/contact"
    }
};
// ReturnType - get return type of function
function createUser() {
    return {
        id: 1,
        name: "Shiva",
        email: "shiva@gmail.com"
    };
}
