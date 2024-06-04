const express = require("express")
const expbhs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const productsRoutes = require('./routes/productsRoutes')

app.engine('handlebars', expbhs.engine())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended:true
  })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/products', productsRoutes)
app.use('/', productsRoutes)

app.listen(3333)