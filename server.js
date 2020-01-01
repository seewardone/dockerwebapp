/*jslint node: true */

'use strict';

const express = require('express');

// Constants
const PORT = 49160;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);