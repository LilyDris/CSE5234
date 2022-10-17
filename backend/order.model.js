const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define Schema
let orderSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
    },
    avatar: {
      type: String,
    },
  }
)

module.exports = mongoose.model('Order', userSchema)