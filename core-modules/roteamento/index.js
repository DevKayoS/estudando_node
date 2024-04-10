const http = require('http')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
  const query = require('url').parse(req.url, true)
  const filename = query.pathname.substring(1)

  if(filename.includes('html')) {
    if(fs.existsSync(filename)){
      fs.readFile(filename, function(err,data){
        res.writeHead(301, {'content-type':'text/html'})
        res.write(data)
        return res.end()
      })
    } else {
      fs.readFile('404.html', function(err, data){
        res.writeHead(302, {'content-type':'text/html'})
        res.write(data)
        return res.end()
      })
    }
  }
})

server.listen(port, ()=> {
  console.log("running server")
})