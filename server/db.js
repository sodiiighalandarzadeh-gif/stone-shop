const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(
  "stone_shop",
  "root",
  "",
  {
    host: "localhost",
    dialect: "mysql"
  }
)

module.exports = sequelize