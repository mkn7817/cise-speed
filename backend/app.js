// app.js

const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Server running on port 8082'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));