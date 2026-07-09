// Promise with Ts
function fetchUser(id: number): Promise<{ id: number; name: string }> {
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
async function getUserData(id: number): Promise<void> {
    try {
        const user = await fetchUser(id)
        console.log(user.name );
        
    } catch (error) {
        console.error("Error fetching user:", error);
        
    }
}

// Generic async function
async function fetchData<T>(url: string): Promise<T> {
    const res = await fetch(url)
    return res.json()
}

fetchData<string>(" ")