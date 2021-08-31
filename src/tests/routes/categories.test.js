const categoriesController = require('./../../controllers/CategoriesController')

describe('Categories Test', () => {
  test('Validate Category', () => {
    expect(categoriesController.validate('Category test')).toBe(true)
  })
})
