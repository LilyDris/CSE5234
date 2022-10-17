var http = require("http");
const cors = require('cors')
const bodyParser = require('body-parser')
var express = require('express');

var app = express();
var fs = require("fs");
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)

app.get('/products', function (req, res) {
    fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
 })

 app.get('/product/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
      var products = JSON.parse( data );
      var product;
      for(let p of products) {
         if (p["id"] == req.params.id) {
            product = p;
         }
      }
      res.end( JSON.stringify(product));
   });
})

// TODO
app.get('/product/?name=:name', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
      var products = JSON.parse( data );
      var product;
      for(let p of products) {
         if (p["id"] == req.params.id) {
            product = p;
         }
      }
      res.end( JSON.stringify(product));
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