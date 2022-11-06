const Tortoise = require('tortoise')

const tortoise = new Tortoise(`amqp://localhost`)

tortoise
    .queue('shipping-queue', { durable: false })
    .publish({ Hello: 'World New' });

console.log("done")