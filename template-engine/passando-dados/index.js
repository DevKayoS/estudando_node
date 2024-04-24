//fazendo as importações
const express = require('express') //importando o express
const exphbs = require('express-handlebars') //importando o handlebars
// iniciando o servidor com express
const app = express()
//fazendo as configurações iniciais para o app entender que deve ler handlebars
app.engine('handlebars', exphbs.engine()) //configurando a engine que o o app deve ler
app.set('view engine', 'handlebars') // setando que tipo de view o app deve entender
// fazendo a rota principal para quando o usuário entrar na página
app.get('/', (req, res)=> {

  //dados que eu quero mandar para view
  const user = {
    name : "Kayo",
    surname: "Vinicius",
    age: 18
  }

  //mais um dado que eu gostaria de passar para a view
  const palavra = "pois é rapaz"
  //segundo parametro sao os dados que eu gostaria de passar para view
  res.render('home', {user: user, palavra}) //ele entende que tem que ler o arquivo denominado home na pasta de views
})
// fazendo o servidor ouvir uma porta para rodar
app.listen(3000, ()=> {
  console.log("Server running in port: ", 3000)
})