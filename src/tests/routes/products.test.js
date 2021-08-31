const productsController = require('./../../controllers/ProductsController')

describe('Product listing', () => {
  test('test product', () => {
    expect(productsController.validate({
        name: 'Product test',
        category_id: 1,
        price: 10,
        discount_price: 8
    })).toBe(true)
  })
})