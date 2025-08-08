const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('You have successfully created your second app!');
});

app.listen(2001, () => {
    console.log('Server is running on http://localhost:%s:%s');
}
);

