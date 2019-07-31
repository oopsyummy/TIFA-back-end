const Sequelize = require("sequelize");
const sequelize = require("../lib/db");
const User = sequelize.define("t_user", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  password: {
    type: Sequelize.STRING,
    primaryKey: true
  }
});

module.exports = User;
