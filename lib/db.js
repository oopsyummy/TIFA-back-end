const Sequelize = require("sequelize");
const User = require("../models/user");

const sequelize = new Sequelize({
  dialect: "sqlite",

  storage: "tifa.sqlite",

  logging: false
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("err", err);
  });

module.exports = sequelize;
