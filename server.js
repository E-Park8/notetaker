const express = require('express')
const apiRoutes = require('./routes/apiRoutes.js')
const htmlRoutes = require('./routes/htmlRoutes.js')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)




app.listen(process.env.PORT || 3000)