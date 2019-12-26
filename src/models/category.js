const Sequelize = require('sequelize')
const sequelize = require('../datebase/datebase')
const Product = require('./product');

const Category = sequelize.define('categories',
{
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      //autoIncrement: true,
    },
    name: {
      type: Sequelize.TEXT,
    },
    description: {
      type: Sequelize.TEXT,
    },
    status: {
      type: Sequelize.ENUM,
      values: ['active', 'inactive', 'deleted'],
      defaultValue: 'active'
    },
    timestamp: true

});

Category.hasMany(Product, {foreingKey:'categoryId',sourceKey: 'id'});
Product.belongsTo(Category, {foreingKey:'categoryId',sourceKey: 'id'});

module.exports = Category;

