const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('You have successfully created your second app!');
});

// Additional routes
app.get('/about', (req, res) => {
    res.send('This is the About page.');
});

app.get('/contact', (req, res) => {
    res.send('This is the Contact page.');
});

app.listen(8081, () => {
    console.log('Server is running on http://localhost:8081');
});