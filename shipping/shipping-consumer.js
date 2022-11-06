const Tortoise = require('tortoise')

const tortoise = new Tortoise(`amqp://localhost`)

tortoise
  .queue('shipping-queue', { durable: false })
  .subscribe(function (msg, ack, nack) {
    // Handle
    let payload = JSON.parse(msg);
    console.log(payload);
  })