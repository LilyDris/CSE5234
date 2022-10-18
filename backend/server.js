var http = require("http");
const cors = require('cors')
const bodyParser = require('body-parser')
var express = require('express');

var app = express();
var fs = require("fs");
var products;
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)

app.get('/products', function (req, res) {
   res.json(products);
 })

 app.get('/product/:id', function (req, res) {
      var products = JSON.parse( data );
      var product;
      for(let p of products) {
         if (p["id"] == req.params.id) {
            product = p;
         }
      }
      res.end( JSON.stringify(product));
})

 app.post('/order', function (req, res) {
   // First read existing users.
   var orderedProducts = req.body["items"];
   var count = {};
   for (let orderedProduct of orderedProducts) {
      if (!count[orderedProduct.id]) count[orderedProduct.id] = 1;
      else count[orderedProduct.id] = count[orderedProduct.id] + 1; 
   }
   for (let p of products) {
      if (count[p["id"]] > p["inventory"]) {
         res.json("failed");
      }
   }
   for (let p of products) {
      if (count[p["id"]]) p["inventory"] = p["inventory"] - count[p["id"]];
   }
   res.json("success");
})
 
 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
      products = JSON.parse(data);
   });
    console.log("Example app listening at http://%s:%s", host, port)
 })