const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res) => {
  fs.readFile('mensagem.html', function(err, data){
    res.writeHead(200, {'context-type':'text/html'})
    res.write(data)
    return res.end()
  })
})


server.listen(port, ()=> {
  console.log("HTTP server running!!")
})