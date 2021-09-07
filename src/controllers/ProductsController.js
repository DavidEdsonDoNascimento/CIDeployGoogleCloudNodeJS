const db = require('./../models')

class ProductsController {
  static async list (req, res) {
    try {
      const products = await db.Products.findAll()
      return res.status(200).json(products)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  static async findById (req, res) {
    try {
      const { id } = req.params
      const product = await db.Products.findOne({ where: { id } })
      return res.status(200).json(product)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  static async insert (req, res) {
    try {
      const { body } = req
      const isValid = ProductsController.validate(body)

      if (!isValid) {
        throw new Error('Product creation not done, invalid requisition')
      }

      const product = await db.Products.create({ ...body, createdAt: new Date(), updatedAt: new Date() })

      return res.status(201).json(product)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  static async update (req, res) {
    try {
      const { id } = req.params
      const { body } = req

      await db.Products.update(body, { where: { id } })

      const product = await db.Products.findOne({ where: { id } })
      return res.status(200).json(product)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  static async delete (req, res) {
    try {
      const { id } = req.params
      await db.Products.update({ status: false }, { where: { id } })
      return res.status(200).json({ msg: `O registro ${id} foi deletado.` })
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  static validate ({ name, categoryId, price, discountPrice }) {
    if (!name || name?.length > 52 || !categoryId || price < discountPrice) {
      return false
    }

    return true
  }
}

module.exports = ProductsController
