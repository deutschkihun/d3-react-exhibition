const mongoose = require('mongoose')

const { Schema } = mongoose

const productSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    level: {
      type: Number,
    },
    categories: {
      type: Number,
    },
  },
  { timestamps: true },
)

const Product = mongoose.model('Product', productSchema)

module.exports = { Product }
