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

//enviando para o formulário de criação de usuário
app.get('/users/create', (req,res)=> {
  res.render('adduser')
})
// criando usuário no banco de dados
app.post('/users/create', async(req,res)=>{
  const name = req.body.name
  const occupation = req.body.occupation
  let newsletter = req.body.newsletter

  if (newsletter === "on"){
    newsletter = true
  } else {
    newsletter = false
  }
  // função assincrona que esta pegando a tabela User e com o método create estou passando oq eu quero que seja criado dentro da tabela
  await User.create({name, occupation, newsletter})

  res.redirect('/')
})
//rota de detalhes do user
app.get("/users/:id", async(req,res)=>{
  const id = req.params.id
  
  const user = await User.findOne({raw:true, where:{id:id}})

  res.render('userview', {user})
})

//remover dados
app.post("/users/delete/:id", async(req,res)=>{
  const id = req.params.id

 await User.destroy({where: {id:id}})

  res.redirect('/')
})

// pegando o usuário para editar
app.get('/users/edit/:id', async(req,res)=>{
  const id =  req.params.id
  const user  = await User.findOne({raw: true, where: {id:id}})

  res.render('editUser', {user})
})
// atualizando no banco de dados
app.post('/users/edit', async(req,res)=>{
 const id = req.body.id
 const name = req.body.name
 const occupation = req.body.occupation
 let newsletter = req.body.newsletter

 if(newsletter === 'on'){
  newsletter = true
 } else {
  newsletter = false
 }
//  criando um objeto com os dados que eu quero atualizar
 const userDataUpdated = {
  id,
  name,
  occupation,
  newsletter
 }

 await User.update( userDataUpdated, {where: {id: id}})

 res.redirect('/')
})

//rota home
app.get('/', async(req, res)=>{
  const users = await User.findAll({raw: true})
  // console.log(users)
  res.render('home', {users})
})


//fazendo a conexão e pode ser usado para criação de tabela
conn
.sync()
// .sync({force: true}) // forma de refazer a tabela
.then(()=>{
  app.listen(3333)
}).catch((err)=> console.log(err))