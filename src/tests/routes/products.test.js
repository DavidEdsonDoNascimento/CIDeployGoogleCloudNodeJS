const productsController = require('./../../controllers/ProductsController')

describe('Controller: Products', () => {
  test('Check if the product is valid', () => {
    expect(productsController.validate({
      name: 'Product test',
      categoryId: 1,
      price: 10,
      discountPrice: 8
    })).toBe(true)
  })
})
