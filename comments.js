// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Create a GET route that returns a message when called
app.get('/comment', (req, res) => {
    res.send('Hello from comment.js!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
