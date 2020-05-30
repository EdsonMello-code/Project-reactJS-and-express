const { model, Schema } = require('mongoose') // To import the method model and Schema from the mongoose 
const mongoosePaginate = require('mongoose-paginate') // To import the mongoose-paginate for paging

// Schema of table of mongodb
const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true
  },
  createAt: {
  type: Date,
  default: Date.now,
  }
})

// Add plugin to Schema for paging with mongoosePaginate
ProductSchema.plugin(mongoosePaginate)
// To declare model
model('Product', ProductSchema)