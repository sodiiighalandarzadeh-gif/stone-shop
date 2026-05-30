const { DataTypes } = require("sequelize")
const sequelize = require("../db")

const Product = sequelize.define("Product", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING
  },
  desc: {
    type: DataTypes.STRING
  }
})

module.exports = Product