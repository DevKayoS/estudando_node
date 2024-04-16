const express = require('express') //importando 
const path = require('path'); //temos que fazer a importação do path para conseguir pegar o html na pasta

const app = express() // criando uma variavel para inicar o express
const port = 3333 //configurando uma porta para o server rodar

const basePath = path.join(__dirname, 'template') //configurando o path para ele abrir no diretório TEMPLATE


//middleware para fazer uma checagem 
const checkAuth = function(req, res, next){ // criando a função que recebe como parametro a requisição, resposta e o next
  req.authStatus = false // fazendo uma simução de checagem nesse caso o usuário nâo esta logado pois esta como false

  //caso o usuário esteja logado ele poderá acessar a página que ele fez a requisição
  if(req.authStatus){
    console.log('Está logado, pode continuar')
    next() //o next foi usado para que o usuário nao fique travado e poder dar continuidade

  } else { //caso o usuário nao esteja logado ele será impedido de acessar a página que ele fez a requisição
    console.log('Não está logado, faça o login para continuar')
    next() //o next foi usado para que o usuário nao fique travado e poder dar continuidade
  }
}
// usando o .use para utilizar a função de checagem agora toda vez que o usuário fazer uma nova requisição ele caira na checagem!
app.use(checkAuth)

app.get('/', (req, res)=>{ //usando o método get para quando o usuário acessar a home 
  res.sendFile(`${basePath}/index.html`); //enviando um arquivo ahtml 
})

//fazendo o servidor "escutar" a porta ex: localhost:3333 que foi declarado anteriormente
app.listen(port, ()=>{
  console.log('Server Running')
})
