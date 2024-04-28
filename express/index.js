const express  = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res)=>{
  res.render('home')
})
//inserindo dados no banco de dados 
app.post('/books/insertbook', (req,res)=>{

  const title = req.body.title
  const pagesqty = req.body.pagesqty

  const sql = `INSERT INTO books (title, pagesqty) VALUES ('${title}', '${pagesqty}')`

  conn.query(sql, function(err){
    if(err){
      console.log(err)
    }
    res.redirect('/books')
  })

})

app.get('/books', (req,res)=>{
  const sql = "SELECT * FROM books"
  
  conn.query(sql, function(err, data){
    if(err){
      console.log(err)
      return
    }
    
    const books = data

    res.render('books', {books})
    
  })
})

// criando a conexão com o banco de dados
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:  '',
  database: 'nodemysql'
})
//conectando de fato no banco de dados
conn.connect(function(err){
  if(err){
    console.log(err)
  }

  console.log('Conectou ao mySQL')

  app.listen(3333, ()=>{
    console.log("Server is running in port: ", 3333)
  })
})
