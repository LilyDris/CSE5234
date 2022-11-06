const Tortoise = require('tortoise')
const superagent = require('superagent')

const tortoise = new Tortoise(`amqp://rudimk:YouKnowWhat@$localhost:5672`)

async function getURL(url){
	let response = await superagent.get(url)
	return response.body
}

tortoise
.queue('random-user-queue', { durable: false })
// Add as many bindings as needed 
.exchange('random-user-exchange', 'direct', 'random-user-key', { durable: false })
.prefetch(1)
.subscribe(function(msg, ack, nack) {
  // Handle 
  let payload = JSON.parse(msg)
  getURL(payload['url']).then((response) => {
    console.log('Job result: ', response)
  })
  ack() // or nack()
})