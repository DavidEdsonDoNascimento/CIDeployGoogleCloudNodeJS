const { Router } = require('express')
const productsController = require('./../controllers/ProductsController')

const router = Router()

router
  .get('/products', productsController.list)
  .get('/products/:id', productsController.findById)
  .post('/products', productsController.insert)
  .patch('/products/:id', productsController.update)
  .delete('/products/:id', productsController.delete)

module.exports = router
