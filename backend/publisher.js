import Tortoise from "Tortoise";

const tortoise = new Tortoise(`amqp://localhost`)

export function publishMessage(payload) {
    tortoise
        .queue('shipping-queue', { durable: false })
        .publish(JSON.stringify(payload));
}