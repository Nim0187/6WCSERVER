const express = require('express');
const app = express();

app.use(express.static('public')); // Serve static files from the 'public' directory
app.get('/', (req, res) => {
    res.send('You have successfully created your second app!');
  }
);
app.listen(8081, () => {
    console.log('Server is running on http://localhost:8081');
  }
);
