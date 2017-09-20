var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var HTTP = require('http');
var HTTPS = require('https');
var fs = require('fs');

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

// USE THIS CODE ONCE PUSHED UP TO DROPLET
// try {
//     var httpsConfig = {
//         key  : fs.readFileSync('/etc/letsencrypt/live/colinstell.com/privkey.pem'),
//         cert : fs.readFileSync('/etc/letsencrypt/live/colinstell.com/cert.pem')
//     };
//     var httpsServer = HTTPS.createServer(httpsConfig, app);
//     httpsServer.listen(443);
//     var httpApp = express();
//     httpApp.use(function(req, res){
//         console.log(req.url);
//         res.redirect('https://colinstell.com' + req.url);
//     });
//     httpApp.listen(80);
// }
// catch(error){
//     console.log(error);
//     console.log('could not set up HTTPS');
//     app.listen(8080);
// }
// finally {
//     console.log('this code runs regardless of whether the above code succeeded or failed');
// }

app.listen(8000);
