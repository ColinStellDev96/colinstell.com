var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();
var secrets = require('./secrets.js');

app.use(express.static('./public'));


app.get('/', function (req, res){
    res.sendFile('/html/index.html', {root:'./public'});
});

// NASA PROJECT
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/nasa_data', function (req, res) {
    console.log('hello');
    request('https://api.nasa.gov/neo/rest/v1/feed?start_date=' + req.query.date +
    '&end_date=' + req.query.date +
    '&detailed=true&api_key=' + secrets.nasaAPI,
    function (error, response, body) {
        console.log(body);
        console.log('error:', error);
        var dataObj = JSON.parse(body);
        res.send(dataObj);
    }
    );
});

// ERRROR & APP.LISTEN

app.use(function(req, res, next) {
    res.status(404).send('not found');
});
app.use(function(req, res, next) {
    res.status(500).send('oops');
});
app.listen(8000);
