const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
}
);

app.get('/data', (req, res) => {
    res.json({ message: 'This is JSON data', time: new Date() });
}
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}
);
app.get('/greet', (req, res) => {   
    const name = req.query.name || 'Guest';
    res.json({
        message: `Hello, ${name}!`,
        date: new Date(),
        info: 'Same resource used with personalized using query parameters'});
    }
);
app.get('/greet/:name', (req, res) => {
    const name = req.params.name || 'Guest';
    res.json({
        message: `Hello, ${name}!`,
        date: new Date(),
        info: 'Same resource used with personalized using route parameters'});
    }
);
app.get('/dog', (req, res) => { 
    const breed = req.query.breed || 'Unknown';
    res.json({
        breed: `${breed}`,
        description: `Information about ${breed} breed`
    });
});
