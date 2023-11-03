const express = require('express');
const app = express();
const path = require('path');

// Serve the Angular app from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Add a route to catch all other routes and serve the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Define a route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
