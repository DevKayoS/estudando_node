const express = require('express') //importando o express

const app = express() //inicializando o express
const port = 3333 //variavel ambiente

//requisição é algo que o usuário enviou
// resposta é algo que o servidor envia para o usuário

app.get('/', (req,res)=>{ //função que esta pegando os dados, ou seja rota do tipo GET, ('/') é a home da rota 
  res.send('Olá mundo') //resposta que estamos enviando para o usuário
})

app.listen(port, ()=>{ //fazendo o app "escutar" a porta que foi declarada em port
  console.log('HTTP server running') //mensagem para saber se o servidor esta rodando 
})

