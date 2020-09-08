const Sequelize = require('sequelize');
// ('database', 'username', 'password')
const db = new Sequelize("books", "root", "root", {
    HOST: "localhost",
    dialect: "mysql",

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

module.exports = db