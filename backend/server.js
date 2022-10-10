var http = require("http");
var express = require('express');
var app = express();
var fs = require("fs");

app.get('/products', function (req, res) {
    fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
 })

app.post('/addProduct', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       console.log( JSON.stringify(req) );
       res.end( JSON.stringify(data));
    });
 })
 
 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })