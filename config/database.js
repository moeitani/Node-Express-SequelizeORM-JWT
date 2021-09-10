

const Sequelize = require('sequelize')

module.exports = new Sequelize('postgres', 'postgres', 'mysecretpassword', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: 0,

    pool: {
        max: 5,
        min: 0,
        aquire: 30000,
        idle: 10000
    }
})

