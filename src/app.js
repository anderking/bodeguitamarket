'use strict'

const express = require('express')
const json = require('express')
const morgan = require('morgan')

// importing routes
const rCategory = require('./routes/rCategory')
const rProduct = require('./routes/rProduct')
const rInvoice = require('./routes/rInvoice')
const rDetailInvoice = require('./routes/rDetailInvoice')
const rTypePayment = require('./routes/rTypePayment')
const rDetailPayment = require('./routes/rDetailPayment')


//initialization
const app = express()

//midelwares
app.use(morgan('dev'))
app.use(json())

//routes

app.use('/api/category', rCategory)
app.use('/api/product', rProduct)
app.use('/api/invoice', rInvoice)
app.use('/api/detailInvoice', rDetailInvoice)
app.use('/api/typePayment', rTypePayment)
app.use('/api/detailPayment', rDetailPayment)

module.exports = app