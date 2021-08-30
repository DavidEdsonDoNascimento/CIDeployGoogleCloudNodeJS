'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Alimentos',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bebidas',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Roupas',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Acessórios',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cozinha',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cama, mesa e banho',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
