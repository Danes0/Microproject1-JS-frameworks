// Add an event listener to the "See Cookies" button
document.getElementById("loadCookies").addEventListener("click", async () => {
    try {
        // Fetch the cookie data from the API endpoint
        const response = await fetch("/api/cookies");

        // Convert the response to JSON format
        const data = await response.json();
        
        // Select the container where the cookies will be displayed
        const cookieList = document.getElementById("cookieList");

        // Clear any existing content inside the container
        cookieList.innerHTML = data.map(cookie => `
            <div class="cookie-item">
                <h2>${cookie.name}</h2>
                <p>${cookie.description}</p>
                <p><strong>Price: $${cookie.price.toFixed(2)}</strong></p>
                <img src="images/${cookie.image}" alt="${cookie.name}">
            </div>
        `).join(""); // Use .join("") to remove unnecessary commas between elements

    } catch (error) {
        // If an error occurs, log it in the console
        console.error("Error loading cookies:", error);
    }
});
