const Tortoise = require('tortoise')
const cron = require('node-cron')

const tortoise = new Tortoise(`amqp://rudimk:YouKnowWhat@$localhost:5672`)

function scheduleMessage(){
    let payload = {url: 'https://randomuser.me/api'}
    tortoise
    .exchange('random-user-exchange', 'direct', { durable:false })
    .publish('random-user-key', payload)
}

cron.schedule('5 * * * * *', scheduleMessage)