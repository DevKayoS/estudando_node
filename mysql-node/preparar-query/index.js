const express  = require('express')
const exphbs = require('express-handlebars')
const pool = require('./db/conn')

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

  const sql = `INSERT INTO books (??, ??) VALUES (?, ?)`
  const data = ['title', 'pagesqty', title, pagesqty]

  pool.query(sql, data, function(err){
    if(err){
      console.log(err)
    }
    res.redirect('/books')
  })

})
//restando os dados dos livros
app.get('/books', (req,res)=>{
  //comando sql para visualizar os livros da tabela books
  const sql = "SELECT * FROM books"
  
  pool.query(sql, function(err, data){
    if(err){
      console.log(err)
      return
    }
    
    const books = data

    res.render('books', {books})
    
  })
})
//resgatando dados especificos
app.get('/books/:id', (req, res)=>{
  const id = req.params.id
  const sql = `SELECT * FROM books WHERE ?? = ?`
  const data = ['id', id]

  pool.query(sql, data, function(err,data){
    if(err){
      console.log(err)
      return
    }

    const booksForId = data[0]

    res.render('booksForId', {booksForId})
  })
})
// atualizando dados
app.get('/books/edit/:id', (req,res)=>{
  const id = req.params.id
  const sql = `SELECT * FROM books WHERE ?? = ?`
  const data = ['id', id]

  pool.query(sql, data, function(err, data){
    if(err){
      console.log(err)
      return
    }
    const editBook = data[0]

    res.render('editbook', {editBook})
  })
})
//atualizando um livro
app.post("/books/updatedBook", (req,res)=>{
  const id =  req.body.id
  const title = req.body.title
  const pagesqty = req.body.pagesqty

  const sql = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`
  const data = ['title', title, 'pagesqty', pagesqty, 'id', id]


  pool.query(sql, data, function(err){
    if(err){
      console.log(err)
    }
    res.redirect('/books')
  })

})
//removendo dados 
app.post('/books/deletedBook/:id', (req,res)=>{
  const id = req.params.id
  const sql = `DELETE FROM books WHERE ?? = ?`
  const data = ['id', id]

  pool.query(sql, data, function(err){
    if(err){
      console.log(err)
    }

    res.redirect('/books')
  })
})


app.listen(3333, ()=>{
  console.log("Server is running in port: ", 3333)
})