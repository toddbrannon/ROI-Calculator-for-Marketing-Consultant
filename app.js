const express = require('express');
const path = require('path');
const app = express();

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine to ejs
app.set('view engine', 'ejs');

// Define a route to render the calculator
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
