'use strict';
var models = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {

    return models.Burgers.bulkCreate(
      [
        {burger_name: "Ahi Tuna"},
        {burger_name: "Chicken Sandwhich"},
        {burger_name: "Bacon Cheeseburger"},
        {burger_name: "Veggie Burger"},
        {burger_name: "Turkey Burger"}
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return models.Burgers.destroy({where:{burger_name: [
        "Ahi Tuna",
        "Chicken Sandwhich",
        "Bacon Cheeseburger",
        "Veggie Burger",
        "Turkey Burger"
    ]}})
  }
};
