'use strict'
const Category = require('../models/category');

async function addCategory (req, res) {
  try {
    const body = req.body
    const {name,description,status} = body
    let newCategory = await Category.create(
    {
      name,description,status
    },
    {
      fields: ['name','description','status']

    });
    if(newCategory){
      return res.status(200).send({
        category: newCategory
      });  
    }
  } catch (err) {
    console.log(err)
    return res.status(500).send({
        error: err
      });
  }
}

module.exports = {
  addCategory,
}