const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/tictac'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/tictac/index.html'));
});

app.listen(process.env.PORT || 8080);
