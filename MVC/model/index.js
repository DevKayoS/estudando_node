const express = require('express')
const exphbs  = require('express-handlebars')

const conn = require('./db/conn')
const Task = require('./models/Task')

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

conn
.sync()
.then(()=>{
  app.listen(3333)
  console.log('Server has been connected')
}).catch((err)=>console.log(err))