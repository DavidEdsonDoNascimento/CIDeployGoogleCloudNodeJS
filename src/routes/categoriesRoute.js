const { Router } = require('express')
const categoriesController = require('./../controllers/CategoriesController')

const router = Router()

router
  .get('/categories', categoriesController.list)

module.exports = router
