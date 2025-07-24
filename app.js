// Import Express.js
const express = require('express');

// Create an instance of Express
const app = express();

// Define a port number for the server
const PORT = 3030;

// Create a simple GET endpoint
app.get('/api/users', (req, res) => {
    res.json({
        uses: [{
            id: 1,
            name: 'Eswar',
            email: 'developerswar94@gmail.com'
        }],
        status: 'success'
    });
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});