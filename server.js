var express = require('express');

var app = express();

app.use(express.static('./public'));


app.get('/', function (req, res){
    res.sendFile('/html/index.html', {root:'./public'});
});

app.get('/portfolio', function (req, res){
    res.sendFile('/html/portfolio.html', {root:'./public'});
});

app.get('/about', function (req, res){
    res.sendFile('/html/about.html', {root:'./public'});
});

app.get('/blog', function (req,res){
    res.sendFile('/html/blog.html', {root:'./public'});
});

app.get('/contact', function (req,res){
    res.sendFile('/html/contact.html', {root:'./public'});
});

// ERRROR & APP.LISTEN

app.use(function(req, res, next) {
    res.status(404).send('not found');
});
app.use(function(req, res, next) {
    res.status(500).send('oops');
});
app.listen(8000);
