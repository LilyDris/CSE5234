import cors from "cors";
import bodyParser from "body-parser";
import  express  from "express";
import { createOrder, getAllProductsAsync, getProductByIdAsync } from "./database_service.js";

var app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(
   bodyParser.urlencoded({
      extended: false,
   }),
   )
   
   app.get('/products', function (req, res) {
      let products = getAllProductsAsync();
      products.then(result => res.json(result));
   })
   
   app.get('/product/:id', function (req, res) {
      let product = getProductByIdAsync(req.params.id);
      res.end( JSON.stringify(product));
   })
   
   app.post('/order', function (req, res) {
      // First read existing users.
      // var orderedProducts = req.body["items"];
      
      const items= req.body["items"];
      const shipping = req.body["shippingInfo"];
      const payment = req.body["paymentInfo"];

      createOrder();

      var count = {};
      var result="success";
      for (let orderedProduct of items) {
         if (!count[orderedProduct.id]) count[orderedProduct.id] = 1;
         else count[orderedProduct.id] = count[orderedProduct.id] + 1; 
      }
      for (let p of products) {
         if (count[p["id"]] > p["inventory"]) {
            result="failed";
         }
      }
      for (let p of products) {
         if (count[p["id"]]) p["inventory"] = p["inventory"] - count[p["id"]];
      }
      res.json(result);
   })
   
   var server = app.listen(8081, function () {
      var port = server.address().port;
      console.log("Example app listening at http://localhost:%s", port);
   });