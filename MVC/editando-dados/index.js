// importando pacotes 
const express = require('express')
const exphbs  = require('express-handlebars')
// fazendo a criação do servidor
const app = express()
// Banco de dados
const conn = require('./db/conn')
const Task = require('./models/Task')

const tasksRoutes = require('./routes/taskRoutes')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/tasks', tasksRoutes)

conn
.sync()
.then(()=>{
  app.listen(3333)
  console.log('Server has been connected')
}).catch((err)=>console.log(err))