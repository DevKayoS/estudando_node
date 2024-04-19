const express = require('express') //fazendo a importação do express
const path = require('path') //fazendo a importação do core module path para trabalhar com arquivos

const app = express() //iniciando o express
const port = 3000 //configurando a porta do localhost

const basePath =  path.join(__dirname, "template") //configurando com o path o base path para ficar mais fácil de fazer o caminho dos arquivos

//configurando o express para conseguir ler json 
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

//fazendo a primeira rota 
app.get('/', (req, res)=> { //rota de home a primeira coisa que irá aparecer na aplicação
  res.sendFile(`${basePath}/index.html`) //quando acessar aquela rota será encaminhado para esse arquivo de html
})

//rota de adição de usuário
app.get('/users/add', (req, res)=> {
  res.sendFile(`${basePath}/userForm.html`) //ao acessar a rota de /users/add p usuário será encaminhado para o arquivo userForm que é um formulário html
})

app.post('/users/save', (req, res)=> {
  console.log(req.body) //logando o que veio como requisição do formulário html
  const name = req.body.name //salvando em uma váriavel o nome que veio pela requisição
  const age =  req.body.age //salvando em uma vvariavel a idade que veio pela requisição
  
  // imprimindo no console.log os dados que foi salvo pela requisição
  console.log(`O nome do usuário é ${name} e sua idade é ${age}`)


  res.sendFile(`${basePath}/userForm.html`) //enviando o usuário de volta ao formulário
})
app.get('/users/:id', (req, res)=>{ //estou declarando pela url meus parametros
  const id = req.params.id //pegando na url o id utilizando os parametros da requisição
  //leitura da tabela users, resgatar um usuário do banco
  console.log(`Estamos buscando pelo usuário: ${id}`) //imprimindo a id que o usuário usou na requisição
  res.sendFile(`${basePath}/users.html`) //enviando como resposta um arquivo html chamado users
})


//porta que os servidor esta rodando
app.listen(port, ()=>{
  console.log("Server running in: ", port)
})