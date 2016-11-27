const Sequelize = require('sequelize');
const sequelize = require('../../database');

const Area = sequelize.define('area', {
  gid: Sequelize.RANGE(Sequelize.INTEGER),
  geom: Sequelize.GEOMETRY('MultiPolygon', 4326)
});

module.exports = Area;
