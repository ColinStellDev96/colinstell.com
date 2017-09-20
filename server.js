var express = require('express');
var HTTP = require('http');
var HTTPS = require('https');
var fs = require('fs');

var app = express();

app.use(express.static('./public'));


app.get('/', function (req, res){
    res.sendFile('/html/index.html', {root:'./public'});
});

app.use('/asteroid', express.static('./public/asteroid/public'));

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
