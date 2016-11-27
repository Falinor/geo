const Sequelize = require('sequelize');
const psql = require('./config').postgresql;

const sequelize = new Sequelize(psql.db, psql.login, psql.password, psql.opts);

module.exports = sequelize;
