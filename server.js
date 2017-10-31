var express  = require('express');
var bodyParser = require('body-parser');
var app = express();

// parses request body and populates request.body
app.use(bodyParser.json());

// Where to serve static content
app.use(express.static('.'));

app.get('/', function (req, res) {
    res.send("Welcome to Think Big");
    });

app.get('/home', function (req, res) {
    res.sendfile('index.html');
    });

console.log("Think Big UI listening on port 8080");
app.listen(8080, function() {});