'use strict'

var express = require('express')
var cCategory = require('../controllers/cCategory')
var router = express.Router()
//const verifyToken = require('../middlewares/verifyToken')
router.post('/',cCategory.addCategory)
//router.get('/',cCategory.addCategory)
/*
router.get('/:id', verifyToken, cActivity.getActivity)
router.get('/', verifyToken, cActivity.getActivities)
router.put('/:id', verifyToken, cActivity.updateActivity)
router.delete('/:id', verifyToken, cActivity.deleteActivity)
*/
module.exports = router