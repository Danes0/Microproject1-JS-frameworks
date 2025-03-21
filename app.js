// Import required modules
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// Import the JSON file containing the cookies data
const cookies = require("./data/cookies.json");

// Middleware to serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Define a GET route to provide the JSON data of cookies
app.get("/api/cookies", (req, res) => {
    res.json(cookies);
});

// Start the Express server and listen on the defined port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
