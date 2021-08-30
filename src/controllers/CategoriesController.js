const db = require('./../models')

class CategoriesController {
  static async list (req, res) {
    try {
      const categories = await db.Categories.findAll()
      return res.status(200).json(categories)
    } catch (error) {
      return res.status(404).json({ error: error })
    }
  }
}

module.exports = CategoriesController
