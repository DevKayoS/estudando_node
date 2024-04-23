const express = require('express') //importando o express
const exphbs = require('express-handlebars') // importando o handlebars

//iniciando o app com o express
const app =  express()

//fazendo o setup inicial do handlebar
app.engine('handlebars', exphbs.engine()) //fazendo o app entender que a engine usada vai ser o express-handlebar
app.set('view engine', 'handlebars') // configurando o que irá aparecer e a engine usada

//configurando a rota home
app.get('/', (req,res)=> {
  res.render('home', {layout: false})
})

// fazendo o server "ouvir" uma porta
app.listen(3000, ()=> {
  console.log("Server running 3000")
})