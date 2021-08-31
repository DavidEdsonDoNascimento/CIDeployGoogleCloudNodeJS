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

  static async insert (req, res) {
    try {
      await this.validate({ ...req.body, createdAt: new Date(), updatedAt: new Date() })
      const category = await db.create({ ...req.body, createdAt: new Date(), updatedAt: new Date() })
      return res.status(200).json(category)
    } catch (error) {
      return res.status(404).json(error)
    }
  }

  static validate (name) {
    if (typeof name !== 'string' || name.length > 25) {
      throw new Error('Parameter name invalid')
    }
    return true
  }
}

module.exports = CategoriesController
