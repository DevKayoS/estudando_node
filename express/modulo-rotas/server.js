const express = require('express') //fazendo a importação do express
const path = require('path') //fazendo a importação do core module path para trabalhar com arquivos

const app = express() //iniciando o express
const port = 3000 //configurando a porta do localhost

const users = require('./users/router') //importando as rotas que foram exportadas na pasta de users no arquivo router.js

const basePath =  path.join(__dirname, "template") //configurando com o path o base path para ficar mais fácil de fazer o caminho dos arquivos

//configurando o express para conseguir ler json 
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json()) //configurando um middleware que faz com que o express consiga interpretar dados que vem por meio de .json

app.use('/users', users) //configurando um middleware que lê as rotas configuradas do "users" que foi configurado na linha 7

//fazendo a primeira rota 
app.get('/', (req, res)=> { //rota de home a primeira coisa que irá aparecer na aplicação
  res.sendFile(`${basePath}/index.html`) //quando acessar aquela rota será encaminhado para esse arquivo de html
})



//porta que os servidor esta rodando
app.listen(port, ()=>{
  console.log("Server running in: ", port)
})