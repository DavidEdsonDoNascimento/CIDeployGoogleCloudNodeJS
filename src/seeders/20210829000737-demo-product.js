'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Products', [
      {
        name: 'Coxinha De Costela',
        category_id: 1,
        description: 'Coxinha com recheio de costela',
        price: 12,
        discount_price: 10,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chapéu de palha',
        category_id: 4,
        description: 'Chapéu de palha com logo',
        price: 20,
        discount_price: 15.99,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pão fatiado 400g',
        category_id: 1,
        description: 'Saco de pão fatiado 400g',
        price: 4.49,
        discount_price: 0,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Cerveja Heineken lata',
        category_id: 2,
        description: 'Cerveja Heineken lata',
        price: 3.89,
        discount_price: 0,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Conjunto Adidas',
        category_id: 3,
        description: 'Conjunto Adidas moleton e calça',
        price: 199.99,
        discount_price: 159.9,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Travesseiro Nasa casal',
        category_id: 6,
        description: 'Conjunto de 2 Travesseiros',
        price: 229,
        discount_price: 189.99,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
