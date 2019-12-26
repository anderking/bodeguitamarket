const Sequelize = require('sequelize')
const sequelize = require('../datebase/datebase')

const Product = sequelize.define('Product',
{
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  categoryId:{
    type: Sequelize.INTEGER,
  },
  costB: {
    type: Sequelize.NUMBER,
  },
  costD: {
    type: Sequelize.NUMBER,
  },
  gain: {
    type: Sequelize.NUMBER,
  },
  stock: {
    type: Sequelize.NUMBER,
  },
  price: {
    type: Sequelize.NUMBER,
  },
  status: {
    type: Sequelize.ENUM,
    values: ['active', 'inactive', 'deleted'],
    defaultValue: 'active'
  },
  timeStamp: true
});


module.exports = Product;