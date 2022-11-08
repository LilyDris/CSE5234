import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import axios from "axios";
import { publishMessage } from "./publisher.js";
import { createOrder, createOrderedProducts, getAllProductsAsync, getProductByIdAsync, getProductInventoryAsync, updateInventory } from "./database_service.js";

var app = express();
var orderNum=Math.floor(Math.random()*(999999-100000)+1000000);
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

app.post('/process-payment', function (req, res) {
   const companyName = req.body["companyName"];
   const companyAccountNumber = req.body["companyAccountNumber"];
   const payment = req.body["paymentInfo"];
   res.end(JSON.stringify({ "confirmationNumber": orderNum }));
})

app.post('/order', function (req, res) {
   console.log(JSON.stringify(req.body));
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
            if (!isNaN(count[product.id])) {
               updateInventory(product, product.inventory - count[product.id]);
            }
         }
      }

      if (response === "success") {
         orderNum=Math.floor(Math.random()*(999999-100000)+1000000);
         const data = {
            companyname: "BR Products",
            companyAccountNumber: "321465978",
            paymentInfo: payment
         }
         axios
            .post('http://localhost:8081/process-payment', data)
            .then(res => {
               // console.log(`Status: ${res.status}`)
               // console.log('Body: ', res.data)
               let order = createOrder(
                  total,
                  shipping.Name,
                  shipping.Street,
                  shipping.City,
                  shipping.State,
                  shipping.Zip,
                  payment.cardNumber,
                  payment.cvv,
                  payment.expiryYear,
                  payment.expiryMonth,
                  orderNum
               );
               order.then(orderResult => {
                  for (let p in count) {
                     let itemCount = count[p];
                     createOrderedProducts(orderResult.id, p, itemCount);
                  }
               });
               publishMessage(req.body);
            })
            .catch(err => {
               console.error(err)
            })
            response=orderNum.toString();
      }

      res.json(response);

   });

})

var server = app.listen(8081, function () {
   var port = server.address().port;
   console.log("Example app listening at http://localhost:%s", port);9
});