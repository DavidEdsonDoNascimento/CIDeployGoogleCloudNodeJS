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
      const { name } = req.body

      const isValid = CategoriesController.validate(name)
      
      if(!isValid){
        throw new Error('Parameter name invalid')
      }

      const category = await db.create({ name, status: true, createdAt: new Date(), updatedAt: new Date() })
      return res.status(200).json(category)
    } catch (error) {
      return res.status(404).json(error)
    }
  }

  static validate (name) {
    if (typeof name !== 'string' || name.length > 25) {
      return false
    }

    return true
  }
}

module.exports = CategoriesController
