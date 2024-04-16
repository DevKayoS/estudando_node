const express = require('express') //importando 
const path = require('path'); //temos que fazer a importação do path para conseguir pegar o html na pasta

const app = express() // criando uma variavel para inicar o express
const port = 3333 //configurando uma porta para o server rodar

const basePath = path.join(__dirname, 'template') //configurando o path para ele abrir no diretório TEMPLATE


//entrando na rota de usuários
app.get('/users/:id', (req, res)=>{ //estou declarando pela url meus parametros
  const id = req.params.id //pegando na url o id utilizando os parametros da requisição
  //leitura da tabela users, resgatar um usuário do banco
  console.log(`Estamos buscando pelo usuário: ${id}`) //imprimindo a id que o usuário usou na requisição
  res.sendFile(`${basePath}/users.html`) //enviando como resposta um arquivo html chamado users
})

app.get('/', (req, res)=>{ //usando o método get para quando o usuário acessar a home 
  res.sendFile(`${basePath}/index.html`); //enviando um arquivo ahtml 
})

//fazendo o servidor "escutar" a porta ex: localhost:3333 que foi declarado anteriormente
app.listen(port, ()=>{
  console.log('Server Running')
})
