const express = require('express')
const exphbs  = require('express-handlebars')

const conn = require('./db/conn')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('views engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.use(express.static('public'))

app.listen(3333)