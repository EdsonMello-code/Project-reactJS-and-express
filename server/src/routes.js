const express = require('express')

const ProductController = require('./controllers/ProductController')

// Start routes
const routes = express.Router()

// Routes 
routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.show)
routes.post('/products', ProductController.store)
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.destroy)
routes.delete('/products', ProductController.destroyAll)

module.exports = routes