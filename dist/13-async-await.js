"use strict";
// Promise with Ts
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                name: "Shiva",
            });
        }, 1000);
    });
}
// Async/await
async function getUserData(id) {
    try {
        const user = await fetchUser(id);
        console.log(user.name);
    }
    catch (error) {
        console.error("Error fetching user:", error);
    }
}
// Generic async function
async function fetchData(url) {
    const res = await fetch(url);
    return res.json();
}
fetchData(" ");
