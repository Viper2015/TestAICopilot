// Create web server
// Start server: node comments.js
// Test: http://localhost:3000/comments/1
// Test: http://localhost:3000/comments/2
// Test: http://localhost:3000/comments/3

const express = require('express');
const app = express();
const port = 3000;

// Set up a route for GET /comments/:id
app.get('/comments/:id', (req, res) => {
  // Extract the id from the path
  const id = req.params.id;
  // Send a response
  res.send(`Comments for post ${id}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});