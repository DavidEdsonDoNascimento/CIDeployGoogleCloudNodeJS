'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { 
          model: 'Categories', 
          key: 'id'
        }
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DOUBLE
      },
      discount_price: {
        type: Sequelize.DOUBLE
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};