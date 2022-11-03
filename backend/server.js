import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import { createOrder, getAllProductsAsync, getProductByIdAsync, getProductInventoryAsync, updateInventory } from "./database_service.js";

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
   products.then(result => {
      res.json(result)
   });
})

app.get('/product/:id', function (req, res) {
   let product = getProductByIdAsync(req.params.id);
   res.end(JSON.stringify(product));
})

app.post('/order', function (req, res) {
   const items = req.body["items"];
   const total = req.body["total"];
   const shipping = req.body["shippingInfo"];
   const payment = req.body["paymentInfo"];

   var count = {};
   var response = "success";
   for (let orderedProduct of items) {
      if (!count[orderedProduct.id]) count[orderedProduct.id] = 1;
      else count[orderedProduct.id] = count[orderedProduct.id] + 1;
   }
   console.log(JSON.stringify(count));
   let products = getAllProductsAsync();
   products.then(result => {
      for (let product of result) {
         let inventoryCount = product.inventory;
         let orderedCount = count[product.id];
         if (inventoryCount < orderedCount) {
            response = "failure";
            break;
         }
      }

      if (response === "success") {
         for (let product of result) {
            if (count[product.id] !== NaN) {
               updateInventory(product, product.inventory - count[product.id]);
            }
         }
      }

      if (response === "success") {
         for (let p in count) {
            let itemCount = count[p];
            createOrder(
               p,
               itemCount,
               total,
               shipping.Name,
               shipping.Street,
               shipping.City,
               shipping.State,
               shipping.Zip,
               payment.cardNumber,
               payment.cvv,
               payment.expiryYear,
               payment.expiryMonth);

         }
      }

      res.json(response);

   });

})

var server = app.listen(8081, function () {
   var port = server.address().port;
   console.log("Example app listening at http://localhost:%s", port);
});