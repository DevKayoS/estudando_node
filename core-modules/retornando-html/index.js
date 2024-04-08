const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('content-type', 'text/html')
  res.end('<h1>Meu primeiro servidor que retorna html</h1><p>Programa atualizado</p>')
})

server.listen(port, () => {
  console.log("Server running!!")
})