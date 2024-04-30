const express  = require('express')
const exphbs = require('express-handlebars')
//importando a conexão para o banco de dados mysql
const conn = require('./db/conn')
//importando models
const User = require(('./models/User'))
//setup inical do express
const app = express()
//ajustando o express para receber dados em json
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())
//configurando o express para entender o handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
//confirando o express para entender que tem que ser essa pasta para arquivos estaticos usada para fazer a estilização
app.use(express.static('public'))

app.get('/', (req, res)=>{
  res.render('home')
})


//fazendo a conexão e pode ser usado para criação de tabela
conn
.sync()
.then(()=>{
  app.listen(3333)
}).catch((err)=> console.log(err))