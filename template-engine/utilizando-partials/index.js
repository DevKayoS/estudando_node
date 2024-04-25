//fazendo as importações
const express = require('express') //importando o express
const exphbs = require('express-handlebars') //importando o handlebars
// iniciando o servidor com express
const app = express()

//fazendo a configuração para o handlebars entender que deve ler o partials
const hbs = exphbs.create({
  partialsDir: ["views/partials"]
})

//fazendo as configurações iniciais para o app entender que deve ler handlebars
app.engine('handlebars', exphbs.engine) //configurando a engine que o o app deve ler
app.set('view engine', 'handlebars') // setando que tipo de view o app deve entender

//enviando o usuário para a dashboard
app.get('/dashboard', (req, res)=>{

  const items = ['item a', 'item b', 'item c']

  res.render('dashboard', {items})
})

//fazendo uma rota para ver a view de post que dentro dela tem o with
app.get('/post',(req,res)=>{
  //fazendo um objeto post
  const post = {
    title: 'aprendendo Node.js',
    category: 'Javascript',
    body: 'Este artigo vai te ajduar a aprender Node.js ....',
    comments: 4,
  }
  //imprimindo na tela o arquivo handlebar blogpost
  res.render('blogpost', {post})
})

app.get('/blog', (req,res)=>{
  const posts = [
    {
      title: 'Aprender Node.js',
      category: 'javascript',
      body: 'Teste',
      comments: 5
    },
    {
      title: 'Aprender PHP',
      category: 'PHP',
      body: 'TesteP',
      comments: 9
    },
    {
      title: 'Aprender C#',
      category: 'C#',
      body: 'TesteC',
      comments: 10
    }
  ]
  res.render('blog', {posts})
})

// fazendo a rota principal para quando o usuário entrar na página
app.get('/', (req, res)=> {
  //dados que eu quero mandar para view
  const user = {
    name : "Kayo",
    surname: "Vinicius",
    age: 18
  }
  // simulação de autentificação
  const auth = true
  //mais um dado que eu gostaria de passar para a view
  const palavra = "pois é rapaz"
  // caso o usuário seja aprovado
  const approved = true
  //segundo parametro sao os dados que eu gostaria de passar para view
  res.render('home', {user: user, palavra, auth, approved}) //ele entende que tem que ler o arquivo denominado home na pasta de views
})
// fazendo o servidor ouvir uma porta para rodar
app.listen(3000, ()=> {
  console.log("Server running in port: ", 3000)
})