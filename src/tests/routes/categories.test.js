const categoriesController = require('./../../controllers/CategoriesController')

describe('Controller: Categories', () => {
  test('Check if the category is valid', () => {
    expect(categoriesController.validate('Category test')).toBe(true)
  })
})
