const express = require('express');
const path = require('path');

// include and initialize the rollbar library with your access token
const Rollbar = require('rollbar');
const rollbar = new Rollbar({
  accessToken: 'c8c2757f3504465f826444358e6f37f7',
  captureUncaught: true,
  captureUnhandledRejections: true,
});

// record a generic message and send it to Rollbar
rollbar.log('Hello world!');

const app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/main.html'));
});

const port = process.env.PORT || 4004;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
