
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(3000, () => {
    console.log('listening on port %s...', server.address().port);
});




// a friendly message on the terminal
// console.log('Server running at http://127.0.0.1:' + port + '/');
